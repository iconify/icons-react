import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5avxcchv.css';

const viewBox = {"width":1600,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5avxcchv"/>`,
		"fallback": "fa:thumbs-down",
	});
}

export default Component;
