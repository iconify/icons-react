import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro5bd-b1c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro5bd-b1c"/>`,
		"fallback": "fluent-emoji-high-contrast:revolving-hearts",
	});
}

export default Component;
