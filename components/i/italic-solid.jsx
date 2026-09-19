import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1i12pb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1i12pb-x"/>`,
		"fallback": "heroicons:italic-solid",
	});
}

export default Component;
