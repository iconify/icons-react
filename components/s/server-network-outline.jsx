import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdh0wop_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdh0wop_b"/>`,
		"fallback": "mdi:server-network-outline",
	});
}

export default Component;
