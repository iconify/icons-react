import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibmfn8bgz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibmfn8bgz"/>`,
		"fallback": "fluent-emoji-flat:spade-suit",
	});
}

export default Component;
