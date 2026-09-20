import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klc5_r1ps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klc5_r1ps"/>`,
		"fallback": "ix:sun-filled",
	});
}

export default Component;
