import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt2ds61_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt2ds61_u"/>`,
		"fallback": "sidekickicons:sidebar-right",
	});
}

export default Component;
