import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us361hl1m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us361hl1m"/>`,
		"fallback": "glyphs:tablet-bold",
	});
}

export default Component;
