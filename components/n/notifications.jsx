import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt-w9bcpo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt-w9bcpo"/>`,
		"fallback": "ix:notifications",
	});
}

export default Component;
