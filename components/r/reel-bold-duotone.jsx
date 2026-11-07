import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm5ls4ggl.css';
import '../../css/y/y_j7etbzt.css';
import '../../css/i/ikx_kubxm.css';
import '../../css/l/lirn7ibcb.css';
import '../../css/g/g_tyrxh-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bm5ls4ggl"/><path class="y_j7etbzt"/><path class="ikx_kubxm"/><path class="lirn7ibcb"/><path class="g_tyrxh-u"/>`,
		"fallback": "solar:reel-bold-duotone",
	});
}

export default Component;
