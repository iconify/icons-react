import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkljmxq8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkljmxq8b"/>`,
		"fallback": "ion:storefront-outline",
	});
}

export default Component;
