import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziybv1boj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziybv1boj"/>`,
		"fallback": "qlementine-icons:question-mark-16",
	});
}

export default Component;
