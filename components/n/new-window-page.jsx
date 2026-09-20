import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frp_v-l8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frp_v-l8w"/>`,
		"fallback": "stash:new-window-page",
	});
}

export default Component;
