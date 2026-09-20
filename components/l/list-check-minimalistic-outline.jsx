import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acm-y3bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="acm-y3bpn"/>`,
		"fallback": "solar:list-check-minimalistic-outline",
	});
}

export default Component;
