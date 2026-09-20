import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0v1czp6p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0v1czp6p"/>`,
		"fallback": "nonicons:vim-insert-mode-16",
	});
}

export default Component;
