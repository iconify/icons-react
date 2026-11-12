import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilcrn3bzw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilcrn3bzw"/>`,
		"fallback": "selfhst:rancher-fleet-dark",
	});
}

export default Component;
