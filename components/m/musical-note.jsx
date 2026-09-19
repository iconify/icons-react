import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu5pueb_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu5pueb_z"/>`,
		"fallback": "fluent-emoji-high-contrast:musical-note",
	});
}

export default Component;
