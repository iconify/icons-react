import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wae5ng5nh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wae5ng5nh"/>`,
		"fallback": "fad:preset-ba",
	});
}

export default Component;
