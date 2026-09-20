import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k--l8mfbc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k--l8mfbc"/>`,
		"fallback": "selfhst:max-dark",
	});
}

export default Component;
