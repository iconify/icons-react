import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opo2qwbrb.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opo2qwbrb"/>`,
		"fallback": "zmdi:notifications-off",
	});
}

export default Component;
