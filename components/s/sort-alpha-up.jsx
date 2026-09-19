import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye7an4k6j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye7an4k6j"/>`,
		"fallback": "glyphs:sort-alpha-up",
	});
}

export default Component;
