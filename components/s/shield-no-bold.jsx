import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4sd06b_x.css';
import '../../css/x/x6y275bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j4sd06b_x"/><path class="x6y275bqj"/></g>`,
		"fallback": "iconamoon:shield-no-bold",
	});
}

export default Component;
