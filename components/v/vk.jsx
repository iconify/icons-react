import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t34a1hbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t34a1hbvh"/>`,
		"fallback": "bxl:vk",
	});
}

export default Component;
