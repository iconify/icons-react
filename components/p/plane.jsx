import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz8cwkb9h.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz8cwkb9h"/>`,
		"fallback": "lineicons:plane",
	});
}

export default Component;
