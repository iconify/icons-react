import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g81rdnxxz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g81rdnxxz"/>`,
		"fallback": "glyphs:times-outline",
	});
}

export default Component;
