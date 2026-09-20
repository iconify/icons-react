import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmex_vr6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmex_vr6h"/>`,
		"fallback": "selfhst:rancher-submariner",
	});
}

export default Component;
