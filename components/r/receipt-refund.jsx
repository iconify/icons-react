import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myl2x9bez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myl2x9bez"/>`,
		"fallback": "heroicons-solid:receipt-refund",
	});
}

export default Component;
