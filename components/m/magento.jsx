import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0a38yrne.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0a38yrne"/>`,
		"fallback": "fa6-brands:magento",
	});
}

export default Component;
