import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czkzp8abb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czkzp8abb"/>`,
		"fallback": "glyphs:square-half-2",
	});
}

export default Component;
