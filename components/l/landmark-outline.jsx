import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk5q1p-7t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tk5q1p-7t"/>`,
		"fallback": "glyphs:landmark-outline",
	});
}

export default Component;
