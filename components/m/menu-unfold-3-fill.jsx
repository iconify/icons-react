import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhpyfvb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhpyfvb_m"/>`,
		"fallback": "ri:menu-unfold-3-fill",
	});
}

export default Component;
