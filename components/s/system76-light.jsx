import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeo-qubjb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeo-qubjb"/>`,
		"fallback": "selfhst:system76-light",
	});
}

export default Component;
