import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5q6bm8so.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5q6bm8so"/>`,
		"fallback": "fa7-solid:underline",
	});
}

export default Component;
