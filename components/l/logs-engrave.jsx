import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o7ouxobha.css';
import '../../css/f/fv6kukroi.css';
import '../../css/e/euj49csjz.css';
import '../../css/f/fza9accym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o7ouxobha wm-k"/><path class="fv6kukroi wm-shadow"/><path class="euj49csjz wm-k"/><path class="fza9accym wm-a"/></g>`,
		"fallback": "withicons:logs-engrave",
	});
}

export default Component;
