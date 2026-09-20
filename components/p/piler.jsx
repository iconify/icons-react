import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku_-c03pv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku_-c03pv"/>`,
		"fallback": "selfhst:piler",
	});
}

export default Component;
