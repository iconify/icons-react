import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsejinj5v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsejinj5v"/>`,
		"fallback": "ooui:volume-down-ltr",
	});
}

export default Component;
