import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zj35u12-a.css';
import '../../css/u/ub9e_ibbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zj35u12-a"/><path class="ub9e_ibbv"/></g>`,
		"fallback": "tabler:playlist-filled",
	});
}

export default Component;
