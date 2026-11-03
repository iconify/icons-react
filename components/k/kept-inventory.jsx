import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c815m4b3j.css';
import '../../css/x/xizs9ebfh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c815m4b3j"/><path class="xizs9ebfh"/>`,
		"fallback": "selfhst:kept-inventory",
	});
}

export default Component;
