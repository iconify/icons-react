import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kycx_culd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kycx_culd"/>`,
		"fallback": "mdi:server-outline",
	});
}

export default Component;
