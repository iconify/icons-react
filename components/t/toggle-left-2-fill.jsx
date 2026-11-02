import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpjy7rbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpjy7rbvl"/>`,
		"fallback": "mingcute:toggle-left-2-fill",
	});
}

export default Component;
