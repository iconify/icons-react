import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtls_ybja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtls_ybja"/>`,
		"fallback": "andrsrxn:text-underline-dashed",
	});
}

export default Component;
