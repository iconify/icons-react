import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfl0l8bik.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfl0l8bik"/>`,
		"fallback": "glyphs:two-outline",
	});
}

export default Component;
