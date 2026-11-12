import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_b39fb3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_b39fb3u"/>`,
		"fallback": "selfhst:pi-source-dark",
	});
}

export default Component;
