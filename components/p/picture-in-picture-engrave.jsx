import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dk4hombjv.css';
import '../../css/f/fv6kukroi.css';
import '../../css/e/euj49csjz.css';
import '../../css/o/o8tqambxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dk4hombjv wm-k"/><path class="fv6kukroi wm-shadow"/><path class="euj49csjz wm-k"/><path class="o8tqambxi wm-a"/></g>`,
		"fallback": "withicons:picture-in-picture-engrave",
	});
}

export default Component;
