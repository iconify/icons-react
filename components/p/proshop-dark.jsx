import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axaeo_zbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axaeo_zbv"/>`,
		"fallback": "selfhst:proshop-dark",
	});
}

export default Component;
