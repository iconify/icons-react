import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg38qu8cl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg38qu8cl"/>`,
		"fallback": "selfhst:mariadb-dark",
	});
}

export default Component;
