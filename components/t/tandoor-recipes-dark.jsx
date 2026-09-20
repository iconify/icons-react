import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txyc7sgll.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txyc7sgll"/>`,
		"fallback": "selfhst:tandoor-recipes-dark",
	});
}

export default Component;
