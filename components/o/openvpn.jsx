import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q84_d0bpg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q84_d0bpg"/>`,
		"fallback": "file-icons:openvpn",
	});
}

export default Component;
