import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7vch6bck.css';
import '../../css/p/p8nic8bwo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7vch6bck"/><path class="p8nic8bwo"/>`,
		"fallback": "selfhst:openvpn",
	});
}

export default Component;
