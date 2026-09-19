import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc95llbty.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc95llbty"/>`,
		"fallback": "fa-regular:sticky-note",
	});
}

export default Component;
