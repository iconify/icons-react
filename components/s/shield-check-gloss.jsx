import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy9u6_k-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy9u6_k-v"/>`,
		"fallback": "withicons:shield-check-gloss",
	});
}

export default Component;
