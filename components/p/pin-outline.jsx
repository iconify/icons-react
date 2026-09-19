import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq8vbjr1h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vq8vbjr1h"/>`,
		"fallback": "glyphs:pin-outline",
	});
}

export default Component;
