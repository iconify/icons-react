import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4fijebgc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4fijebgc"/>`,
		"fallback": "quill:label-mini",
	});
}

export default Component;
