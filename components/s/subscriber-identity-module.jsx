import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry4jo_b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry4jo_b0p"/>`,
		"fallback": "mdi:subscriber-identity-module",
	});
}

export default Component;
