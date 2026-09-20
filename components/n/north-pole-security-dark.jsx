import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6r95vbrz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6r95vbrz"/>`,
		"fallback": "selfhst:north-pole-security-dark",
	});
}

export default Component;
