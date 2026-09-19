import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5vy0x2pp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5vy0x2pp"/>`,
		"fallback": "fluent-emoji-high-contrast:musical-score",
	});
}

export default Component;
