import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2cj1w83c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2cj1w83c"/>`,
		"fallback": "selfhst:purpurmc-dark",
	});
}

export default Component;
