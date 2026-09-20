import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9s0nbbjb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="j9s0nbbjb"/>`,
		"fallback": "oui:minus",
	});
}

export default Component;
