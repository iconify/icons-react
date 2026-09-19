import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zads2pb3k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zads2pb3k"/>`,
		"fallback": "fa7-solid:utensils",
	});
}

export default Component;
