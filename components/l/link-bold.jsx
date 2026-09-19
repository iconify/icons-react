import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrw8ww-qi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrw8ww-qi"/>`,
		"fallback": "glyphs:link-bold",
	});
}

export default Component;
