import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_7dyob4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_7dyob4y"/>`,
		"fallback": "selfhst:sortifyr",
	});
}

export default Component;
