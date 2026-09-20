import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojqmn_bmk.css';
import '../../css/t/t527q7gmg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ojqmn_bmk"/><path class="t527q7gmg"/></g>`,
		"fallback": "streamline-color:target-3",
	});
}

export default Component;
