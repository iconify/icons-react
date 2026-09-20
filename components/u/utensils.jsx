import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa-e4t9pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa-e4t9pz"/>`,
		"fallback": "uil:utensils",
	});
}

export default Component;
