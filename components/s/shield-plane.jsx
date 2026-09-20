import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p25p1z9lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p25p1z9lo"/>`,
		"fallback": "mdi:shield-plane",
	});
}

export default Component;
