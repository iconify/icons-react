import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6d7x4bpp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6d7x4bpp"/>`,
		"fallback": "glyphs:scissors-open-1",
	});
}

export default Component;
