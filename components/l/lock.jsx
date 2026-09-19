import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iduj7sbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iduj7sbgl"/>`,
		"fallback": "mono-icons:lock",
	});
}

export default Component;
