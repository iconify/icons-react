import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i91je5b4t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i91je5b4t"/>`,
		"fallback": "fluent-emoji-high-contrast:person-facepalming",
	});
}

export default Component;
