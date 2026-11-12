import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn9l6bbdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn9l6bbdm"/>`,
		"fallback": "selfhst:linkwarden-dark",
	});
}

export default Component;
