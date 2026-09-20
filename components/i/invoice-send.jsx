import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgw_5gsvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgw_5gsvx"/>`,
		"fallback": "mdi:invoice-send",
	});
}

export default Component;
