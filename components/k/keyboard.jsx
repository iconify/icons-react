import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqyk13b1v.css';
import '../../css/d/d3p-lq76v.css';
import '../../css/q/qwd4hbbeu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqyk13b1v"/><path class="d3p-lq76v"/><path class="qwd4hbbeu"/></g>`,
		"fallback": "streamline-color:keyboard",
	});
}

export default Component;
