import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1q8_kbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1q8_kbps"/>`,
		"fallback": "boxicons:sock",
	});
}

export default Component;
