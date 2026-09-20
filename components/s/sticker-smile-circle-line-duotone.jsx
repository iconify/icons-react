import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yt3zxkvjm.css';
import '../../css/t/th0xxsgwf.css';
import '../../css/t/t6qg_cbvk.css';
import '../../css/l/l5tkhob0v.css';
import '../../css/l/ly78vgcoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="yt3zxkvjm"/><path class="th0xxsgwf"/><path class="t6qg_cbvk"/><ellipse transform="rotate(-15 8.714 11.328)" class="l5tkhob0v"/><path class="ly78vgcoq"/></g>`,
		"fallback": "solar:sticker-smile-circle-line-duotone",
	});
}

export default Component;
