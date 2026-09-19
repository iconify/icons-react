import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej1q0x8zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej1q0x8zy"/>`,
		"fallback": "griddy-icons:package-delivery-filled",
	});
}

export default Component;
