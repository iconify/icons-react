import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy4g9dohn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy4g9dohn"/>`,
		"fallback": "selfhst:papra-light",
	});
}

export default Component;
