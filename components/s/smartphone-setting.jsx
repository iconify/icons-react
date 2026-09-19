import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouy_cybgh.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouy_cybgh"/>`,
		"fallback": "zmdi:smartphone-setting",
	});
}

export default Component;
