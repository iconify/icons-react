import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpoa-6mah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpoa-6mah"/>`,
		"fallback": "mdi:phone-ring-outline",
	});
}

export default Component;
