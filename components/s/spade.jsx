import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxim7sfyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxim7sfyg"/>`,
		"fallback": "at-icons:spade",
	});
}

export default Component;
