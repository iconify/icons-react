import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz9t6ee6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz9t6ee6h"/>`,
		"fallback": "simple-icons:plurk",
	});
}

export default Component;
