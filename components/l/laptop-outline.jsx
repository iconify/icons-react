import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bon4xeh_b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bon4xeh_b"/>`,
		"fallback": "glyphs:laptop-outline",
	});
}

export default Component;
