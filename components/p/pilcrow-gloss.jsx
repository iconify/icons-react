import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjfabab9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjfabab9u"/>`,
		"fallback": "withicons:pilcrow-gloss",
	});
}

export default Component;
