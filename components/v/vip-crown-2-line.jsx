import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuyin8dwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuyin8dwm"/>`,
		"fallback": "ri:vip-crown-2-line",
	});
}

export default Component;
