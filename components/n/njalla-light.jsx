import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqr8whb8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqr8whb8c"/>`,
		"fallback": "selfhst:njalla-light",
	});
}

export default Component;
