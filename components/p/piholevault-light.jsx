import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8fz_zm9v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8fz_zm9v"/>`,
		"fallback": "selfhst:piholevault-light",
	});
}

export default Component;
