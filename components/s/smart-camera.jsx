import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4h8u2bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4h8u2bgp"/>`,
		"fallback": "cbi:smart-camera",
	});
}

export default Component;
