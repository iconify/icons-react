import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5syz5bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5syz5bxt"/>`,
		"fallback": "keyline-icons:send-horizontal-fill",
	});
}

export default Component;
