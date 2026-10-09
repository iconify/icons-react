import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3dl8_bpn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3dl8_bpn"/>`,
		"fallback": "energy-icons:scan-face-20-bold",
	});
}

export default Component;
