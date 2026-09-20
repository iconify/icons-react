import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq7w1ubzu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dq7w1ubzu"/>`,
		"fallback": "qlementine-icons:puzzle-piece-16",
	});
}

export default Component;
