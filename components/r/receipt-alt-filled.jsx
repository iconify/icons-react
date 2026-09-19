import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg69u6buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg69u6buu"/>`,
		"fallback": "griddy-icons:receipt-alt-filled",
	});
}

export default Component;
