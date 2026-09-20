import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks693thui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks693thui"/>`,
		"fallback": "keyline-icons:truck-electric-sharp",
	});
}

export default Component;
