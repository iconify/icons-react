import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anea1nyir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anea1nyir"/>`,
		"fallback": "fluent-emoji-high-contrast:paw-prints",
	});
}

export default Component;
