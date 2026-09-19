import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/houfp_bzv.css';
import '../../css/h/h8_ziyb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="houfp_bzv"/><path class="h8_ziyb1i"/>`,
		"fallback": "boxicons:select-none-filled",
	});
}

export default Component;
