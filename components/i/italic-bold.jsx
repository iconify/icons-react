import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-vnjobny.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-vnjobny"/>`,
		"fallback": "glyphs:italic-bold",
	});
}

export default Component;
