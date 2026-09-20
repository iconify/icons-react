import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi1222_ni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi1222_ni"/>`,
		"fallback": "ix:product-management",
	});
}

export default Component;
