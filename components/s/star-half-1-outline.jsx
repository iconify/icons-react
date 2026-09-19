import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0xyldb6r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v0xyldb6r"/>`,
		"fallback": "glyphs:star-half-1-outline",
	});
}

export default Component;
