import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsessgr_y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsessgr_y"/>`,
		"fallback": "glyphs:loveseat-outline",
	});
}

export default Component;
