import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfk4ssalg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfk4ssalg"/>`,
		"fallback": "mdi:receipt-text-send",
	});
}

export default Component;
