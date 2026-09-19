import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j51b4ob1j.css';
import '../../css/i/ieygd_q0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j51b4ob1j"/><path class="ieygd_q0h"/>`,
		"fallback": "boxicons:location-alt-2",
	});
}

export default Component;
