import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwe524shh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwe524shh"/>`,
		"fallback": "mdi:wallet-plus-outline",
	});
}

export default Component;
