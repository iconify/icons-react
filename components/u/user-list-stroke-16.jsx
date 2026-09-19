import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o6yel_k4d.css';
import '../../css/a/a5femrbwv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="o6yel_k4d"/><path class="a5femrbwv"/></g>`,
		"fallback": "garden:user-list-stroke-16",
	});
}

export default Component;
