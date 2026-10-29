import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x9u1bo21r.css';
import '../../css/f/fv6kukroi.css';
import '../../css/e/euj49csjz.css';
import '../../css/y/yc5-7oenb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x9u1bo21r"/><path class="fv6kukroi wm-shadow"/><path class="euj49csjz wm-k"/><path class="wm-a yc5-7oenb"/></g>`,
		"fallback": "withicons:terminal-engrave",
	});
}

export default Component;
