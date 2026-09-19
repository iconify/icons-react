import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0hu2obfd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0hu2obfd"/>`,
		"fallback": "glyphs:ticket-1-bold",
	});
}

export default Component;
