import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q221gvjez.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q221gvjez"/>`,
		"fallback": "glyphs:sparkles-1-bold",
	});
}

export default Component;
