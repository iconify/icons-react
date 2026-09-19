import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m32h73d6t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m32h73d6t"/>`,
		"fallback": "glyphs:path-1-outline",
	});
}

export default Component;
