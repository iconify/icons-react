import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4cvr9bub.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4cvr9bub"/>`,
		"fallback": "fa7-solid:libra",
	});
}

export default Component;
