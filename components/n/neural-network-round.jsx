import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ffppbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ffppbkm"/>`,
		"fallback": "coolicons:neural-network-round",
	});
}

export default Component;
