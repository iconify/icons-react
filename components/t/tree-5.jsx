import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxu01r5zg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxu01r5zg"/>`,
		"fallback": "glyphs:tree-5",
	});
}

export default Component;
