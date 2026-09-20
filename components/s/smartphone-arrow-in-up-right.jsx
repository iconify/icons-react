import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4x-iwjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov4x-iwjx"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-up-right",
	});
}

export default Component;
