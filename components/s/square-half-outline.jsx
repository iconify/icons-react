import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpkcm5but.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mpkcm5but"/>`,
		"fallback": "glyphs:square-half-outline",
	});
}

export default Component;
