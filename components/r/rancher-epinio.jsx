import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0oiyblvd.css';
import '../../css/n/nxr9mlzqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0oiyblvd"/><path class="nxr9mlzqr"/>`,
		"fallback": "selfhst:rancher-epinio",
	});
}

export default Component;
