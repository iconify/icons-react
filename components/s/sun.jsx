import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh-b04byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh-b04byf"/>`,
		"fallback": "heroicons:sun",
	});
}

export default Component;
