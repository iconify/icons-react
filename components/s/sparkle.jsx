import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t519h8eza.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t519h8eza"/>`,
		"fallback": "glyphs:sparkle",
	});
}

export default Component;
