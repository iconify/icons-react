import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i631qty3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i631qty3j"/>`,
		"fallback": "fluent-emoji-high-contrast:oyster",
	});
}

export default Component;
