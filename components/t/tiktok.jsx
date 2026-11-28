import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkd0k5o0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkd0k5o0y"/>`,
		"fallback": "iconaut:tiktok",
	});
}

export default Component;
