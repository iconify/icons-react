import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtdpo8psi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtdpo8psi"/>`,
		"fallback": "glyphs:ticket",
	});
}

export default Component;
