import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_k-j67ku.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_k-j67ku"/>`,
		"fallback": "glyphs:p-bold",
	});
}

export default Component;
