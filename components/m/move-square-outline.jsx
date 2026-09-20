import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qyxnrua8b.css';
import '../../css/v/vxclh00uk.css';
import '../../css/s/so_2km93v.css';
import '../../css/v/v09hq4bgz.css';
import '../../css/b/b1mn12bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qyxnrua8b"/><path class="vxclh00uk"/><path class="so_2km93v"/><path class="v09hq4bgz"/><path clip-rule="evenodd" class="b1mn12bfd"/></g>`,
		"fallback": "solar:move-square-outline",
	});
}

export default Component;
