import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_-cg7b6h.css';

const viewBox = {"width":717,"height":730};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_-cg7b6h"/>`,
		"fallback": "ls:key",
	});
}

export default Component;
