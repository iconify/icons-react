import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t7aiijbwz.css';
import '../../css/f/fv6kukroi.css';
import '../../css/e/euj49csjz.css';
import '../../css/o/o58t9qojd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t7aiijbwz"/><path class="fv6kukroi wm-shadow"/><path class="euj49csjz"/><path class="o58t9qojd"/></g>`,
		"fallback": "withicons:piano-engrave",
	});
}

export default Component;
