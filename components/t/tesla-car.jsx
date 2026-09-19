import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixrhjab8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixrhjab8n"/>`,
		"fallback": "cbi:tesla-car",
	});
}

export default Component;
