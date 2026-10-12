import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9j3dtsig.css';
import '../../css/d/dm0pmwfce.css';
import '../../css/d/d_czc4bgz.css';
import '../../css/j/ja581zbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y9j3dtsig"/><path class="dm0pmwfce"/><path class="d_czc4bgz"/><path class="ja581zbzh"/></g>`,
		"fallback": "lucide-extended:shopping-cart-plus-duotone",
	});
}

export default Component;
