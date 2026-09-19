import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-1idns3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-1idns3b"/>`,
		"fallback": "boxicons:tablet",
	});
}

export default Component;
