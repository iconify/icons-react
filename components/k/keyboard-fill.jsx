import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpvz-r1bj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpvz-r1bj"/>`,
		"fallback": "bi:keyboard-fill",
	});
}

export default Component;
