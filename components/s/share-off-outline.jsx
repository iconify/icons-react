import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix1cghcpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix1cghcpn"/>`,
		"fallback": "mdi:share-off-outline",
	});
}

export default Component;
