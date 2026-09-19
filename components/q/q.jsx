import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce-4x0bzt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce-4x0bzt"/>`,
		"fallback": "glyphs:q",
	});
}

export default Component;
