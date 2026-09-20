import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8m49d65q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8m49d65q"/>`,
		"fallback": "qlementine-icons:skip-backward-16",
	});
}

export default Component;
