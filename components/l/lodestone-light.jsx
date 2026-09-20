import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymi50ubsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymi50ubsd"/>`,
		"fallback": "selfhst:lodestone-light",
	});
}

export default Component;
