import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfyluc_9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfyluc_9u"/>`,
		"fallback": "selfhst:scaleway-light",
	});
}

export default Component;
