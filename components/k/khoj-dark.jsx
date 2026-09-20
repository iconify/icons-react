import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d63o6h2ho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d63o6h2ho"/>`,
		"fallback": "selfhst:khoj-dark",
	});
}

export default Component;
