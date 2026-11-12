import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntdd5ebmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntdd5ebmm"/>`,
		"fallback": "selfhst:temps-dark",
	});
}

export default Component;
