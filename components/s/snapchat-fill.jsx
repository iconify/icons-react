import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv0tkkeho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv0tkkeho"/>`,
		"fallback": "ri:snapchat-fill",
	});
}

export default Component;
