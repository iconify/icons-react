import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg50ktb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg50ktb8a"/>`,
		"fallback": "mdi:printer-pos-network-outline",
	});
}

export default Component;
