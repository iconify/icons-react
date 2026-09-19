import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu0xh0b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu0xh0b4d"/>`,
		"fallback": "boxicons:phone-plus-filled",
	});
}

export default Component;
