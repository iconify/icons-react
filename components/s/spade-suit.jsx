import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv-h0ub1m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv-h0ub1m"/>`,
		"fallback": "fluent-emoji-high-contrast:spade-suit",
	});
}

export default Component;
