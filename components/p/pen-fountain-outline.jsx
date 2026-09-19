import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy8o92x7h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cy8o92x7h"/>`,
		"fallback": "glyphs:pen-fountain-outline",
	});
}

export default Component;
