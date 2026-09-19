import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j36ff-b8d.css';
import '../../css/q/qeixe-bjh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j36ff-b8d"/><path class="qeixe-bjh"/>`,
		"fallback": "catppuccin:java-record",
	});
}

export default Component;
