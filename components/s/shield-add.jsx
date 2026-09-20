import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znxifc1ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znxifc1ji"/>`,
		"fallback": "mdi:shield-add",
	});
}

export default Component;
