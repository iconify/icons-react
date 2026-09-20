import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nseg2ysar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nseg2ysar"/>`,
		"fallback": "selfhst:restreamer-light",
	});
}

export default Component;
