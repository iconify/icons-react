import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfo6gbb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfo6gbb_e"/>`,
		"fallback": "simple-icons:leaderprice",
	});
}

export default Component;
