import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffys-06sv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffys-06sv"/>`,
		"fallback": "fluent-emoji-high-contrast:volleyball",
	});
}

export default Component;
