import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdicp7lrh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdicp7lrh"/>`,
		"fallback": "glyphs:sun-1",
	});
}

export default Component;
