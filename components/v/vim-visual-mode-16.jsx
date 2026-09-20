import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve9u0v-hj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve9u0v-hj"/>`,
		"fallback": "nonicons:vim-visual-mode-16",
	});
}

export default Component;
