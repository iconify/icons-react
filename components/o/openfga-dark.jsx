import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-1yv-bzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-1yv-bzf"/>`,
		"fallback": "selfhst:openfga-dark",
	});
}

export default Component;
