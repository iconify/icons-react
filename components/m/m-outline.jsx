import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhzn3iewl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhzn3iewl"/>`,
		"fallback": "glyphs:m-outline",
	});
}

export default Component;
