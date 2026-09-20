import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csa0j6xil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csa0j6xil"/>`,
		"fallback": "mdi:playstation-network",
	});
}

export default Component;
