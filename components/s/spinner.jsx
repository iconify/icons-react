import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji7iwovju.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji7iwovju"/>`,
		"fallback": "glyphs:spinner",
	});
}

export default Component;
