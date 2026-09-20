import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqr2b_b3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqr2b_b3v"/>`,
		"fallback": "selfhst:tracktor",
	});
}

export default Component;
