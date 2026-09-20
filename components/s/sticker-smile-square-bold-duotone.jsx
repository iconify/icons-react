import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uz7y-qbqy.css';
import '../../css/b/bnnp0ybog.css';
import '../../css/k/kybbyt4wx.css';
import '../../css/f/f_hvwcoce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uz7y-qbqy"/><path clip-rule="evenodd" class="bnnp0ybog"/><path class="kybbyt4wx"/><path class="f_hvwcoce"/></g>`,
		"fallback": "solar:sticker-smile-square-bold-duotone",
	});
}

export default Component;
