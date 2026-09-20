import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vak5zrb_p.css';
import '../../css/u/uhj5_jbkq.css';
import '../../css/q/q4x_57byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vak5zrb_p"/><path class="uhj5_jbkq"/><path class="q4x_57byx"/></g>`,
		"fallback": "streamline-cyber:user-chat-2",
	});
}

export default Component;
