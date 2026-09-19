import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap5v7lfww.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap5v7lfww"/>`,
		"fallback": "glyphs-poly:w",
	});
}

export default Component;
