import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlgkx343y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlgkx343y"/>`,
		"fallback": "fad:logo-fl",
	});
}

export default Component;
