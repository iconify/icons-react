import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_3i9xybj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_3i9xybj"/>`,
		"fallback": "f7:minus-slash-plus",
	});
}

export default Component;
