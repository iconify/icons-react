import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgx6o05ak.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zgx6o05ak"/>`,
		"fallback": "glyphs:paint-brush-bold",
	});
}

export default Component;
