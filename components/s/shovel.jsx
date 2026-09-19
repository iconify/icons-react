import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct_xoybyk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct_xoybyk"/>`,
		"fallback": "glyphs:shovel",
	});
}

export default Component;
