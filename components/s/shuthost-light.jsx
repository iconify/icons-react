import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1z6a0a3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1z6a0a3z"/>`,
		"fallback": "selfhst:shuthost-light",
	});
}

export default Component;
