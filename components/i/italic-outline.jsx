import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8ah1-_tb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8ah1-_tb"/>`,
		"fallback": "glyphs:italic-outline",
	});
}

export default Component;
