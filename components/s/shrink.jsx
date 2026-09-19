import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im1873ppt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im1873ppt"/>`,
		"fallback": "ci:shrink",
	});
}

export default Component;
