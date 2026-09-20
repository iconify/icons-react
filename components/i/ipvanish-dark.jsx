import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv1ourhyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv1ourhyg"/>`,
		"fallback": "selfhst:ipvanish-dark",
	});
}

export default Component;
