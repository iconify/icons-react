import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5tv27bcp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t5tv27bcp"/>`,
		"fallback": "ix:network-wired-wireless",
	});
}

export default Component;
