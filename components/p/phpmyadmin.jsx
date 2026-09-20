import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuptj_q1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuptj_q1z"/>`,
		"fallback": "selfhst:phpmyadmin",
	});
}

export default Component;
