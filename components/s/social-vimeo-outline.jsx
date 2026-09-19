import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhfv55b2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhfv55b2s"/>`,
		"fallback": "ion:social-vimeo-outline",
	});
}

export default Component;
