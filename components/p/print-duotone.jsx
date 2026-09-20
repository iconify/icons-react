import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfydjaclu.css';
import '../../css/w/wwd6z-p7h.css';
import '../../css/t/t-wbufy3i.css';
import '../../css/z/zefpwibul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bfydjaclu"/><path class="wwd6z-p7h"/><path class="t-wbufy3i"/><path class="zefpwibul"/></g>`,
		"fallback": "lets-icons:print-duotone",
	});
}

export default Component;
