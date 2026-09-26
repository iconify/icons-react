import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnk_umnxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nnk_umnxj"/>`,
		"fallback": "solar:magnifier-close-bold",
	});
}

export default Component;
