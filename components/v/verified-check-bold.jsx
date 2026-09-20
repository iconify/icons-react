import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg3mb-7km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kg3mb-7km"/>`,
		"fallback": "solar:verified-check-bold",
	});
}

export default Component;
