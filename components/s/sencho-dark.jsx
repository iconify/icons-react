import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz0s2ac1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz0s2ac1v"/>`,
		"fallback": "selfhst:sencho-dark",
	});
}

export default Component;
