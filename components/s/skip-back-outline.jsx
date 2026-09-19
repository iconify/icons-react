import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkb-0tb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkb-0tb9m"/>`,
		"fallback": "eva:skip-back-outline",
	});
}

export default Component;
