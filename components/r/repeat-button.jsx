import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3nheebop.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3nheebop"/>`,
		"fallback": "openmoji:repeat-button",
	});
}

export default Component;
