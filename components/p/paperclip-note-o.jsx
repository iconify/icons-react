import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc49rjbhx.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc49rjbhx"/>`,
		"fallback": "vs:paperclip-note-o",
	});
}

export default Component;
