import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_o_lwkuc.css';
import '../../css/x/xjaw9ykwq.css';
import '../../css/x/xri1c9bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_o_lwkuc"/><path class="xjaw9ykwq"/><path clip-rule="evenodd" class="xri1c9bdr"/>`,
		"fallback": "solar:text-bold-circle-bold",
	});
}

export default Component;
