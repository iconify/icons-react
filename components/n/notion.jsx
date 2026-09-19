import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldi8w1b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldi8w1b8u"/>`,
		"fallback": "bxl:notion",
	});
}

export default Component;
