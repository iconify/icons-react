import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad1opj13q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad1opj13q"/>`,
		"fallback": "quill:to-do",
	});
}

export default Component;
