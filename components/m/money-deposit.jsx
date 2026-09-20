import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blwbkzb0w.css';
import '../../css/r/rh4s4ac8b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blwbkzb0w"/><path class="rh4s4ac8b"/>`,
		"fallback": "vaadin:money-deposit",
	});
}

export default Component;
