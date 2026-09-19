import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx4zb4yjb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx4zb4yjb"/>`,
		"fallback": "glyphs:toolbox",
	});
}

export default Component;
