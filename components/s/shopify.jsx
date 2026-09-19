import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bilw1i94r.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bilw1i94r"/>`,
		"fallback": "fa-brands:shopify",
	});
}

export default Component;
