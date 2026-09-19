import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym02-6qjy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym02-6qjy"/>`,
		"fallback": "glyphs:union-bold",
	});
}

export default Component;
