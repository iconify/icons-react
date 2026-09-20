import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub6fx6bwu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub6fx6bwu"/>`,
		"fallback": "selfhst:openziti-dark",
	});
}

export default Component;
