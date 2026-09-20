import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_9vdtigo.css';
import '../../css/e/etu-42buw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_9vdtigo"/><path class="etu-42buw"/>`,
		"fallback": "selfhst:klipper",
	});
}

export default Component;
