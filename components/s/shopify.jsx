import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep9qorbvs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep9qorbvs"/>`,
		"fallback": "cib:shopify",
	});
}

export default Component;
