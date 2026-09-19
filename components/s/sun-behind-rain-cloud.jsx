import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzh6otbss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzh6otbss"/>`,
		"fallback": "fluent-emoji-high-contrast:sun-behind-rain-cloud",
	});
}

export default Component;
