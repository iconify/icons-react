import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu0q6bb1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu0q6bb1n"/>`,
		"fallback": "selfhst:maxun-dark",
	});
}

export default Component;
