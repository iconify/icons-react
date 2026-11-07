import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp6qz_ktz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp6qz_ktz"/>`,
		"fallback": "carbon:shield-infinity",
	});
}

export default Component;
