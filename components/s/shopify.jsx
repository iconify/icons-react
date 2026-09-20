import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnq4f9bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnq4f9bwa"/>`,
		"fallback": "mdi:shopify",
	});
}

export default Component;
