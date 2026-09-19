import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky74tsb9t.css';
import '../../css/i/iacqrl92w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky74tsb9t"/><path class="iacqrl92w"/>`,
		"fallback": "bxl:product-hunt",
	});
}

export default Component;
