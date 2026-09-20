import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsxu6h-uf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsxu6h-uf"/>`,
		"fallback": "selfhst:rahoot-light",
	});
}

export default Component;
