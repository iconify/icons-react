import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnnn5it5q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnnn5it5q"/>`,
		"fallback": "quill:jump",
	});
}

export default Component;
