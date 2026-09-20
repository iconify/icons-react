import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5468drzx.css';
import '../../css/z/zg9s_i7qh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5468drzx"/><path clip-rule="evenodd" class="zg9s_i7qh"/>`,
		"fallback": "streamline-block:shopping-store",
	});
}

export default Component;
