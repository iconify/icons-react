import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mk_ow0rpx.css';
import '../../css/z/z3hw_ybpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mk_ow0rpx"/><path class="z3hw_ybpd"/></g>`,
		"fallback": "solar:usb-circle-bold-duotone",
	});
}

export default Component;
