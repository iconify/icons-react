import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgpp--bcl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgpp--bcl"/>`,
		"fallback": "selfhst:telltaledns-light",
	});
}

export default Component;
