import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv_pdp-8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv_pdp-8q"/>`,
		"fallback": "mdi:orbit-variant",
	});
}

export default Component;
