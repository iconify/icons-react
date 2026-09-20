import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id4gopsxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="id4gopsxz"/>`,
		"fallback": "solar:square-arrow-right-up-bold",
	});
}

export default Component;
