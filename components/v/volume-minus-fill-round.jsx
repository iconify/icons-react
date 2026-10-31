import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i40lef8wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i40lef8wy"/>`,
		"fallback": "coolicons:volume-minus-fill-round",
	});
}

export default Component;
