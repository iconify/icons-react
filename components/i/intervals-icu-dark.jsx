import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2qs97b0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2qs97b0q"/>`,
		"fallback": "selfhst:intervals-icu-dark",
	});
}

export default Component;
