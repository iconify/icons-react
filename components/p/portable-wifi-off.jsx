import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjf1anbpn.css';

const viewBox = {"width":432,"height":424};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjf1anbpn"/>`,
		"fallback": "zmdi:portable-wifi-off",
	});
}

export default Component;
