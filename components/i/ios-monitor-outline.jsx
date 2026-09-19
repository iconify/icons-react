import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5_4c5bns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5_4c5bns"/>`,
		"fallback": "ion:ios-monitor-outline",
	});
}

export default Component;
