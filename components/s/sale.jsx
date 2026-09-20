import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bmx8l16wx.css';
import '../../css/q/qr8ob5b7o.css';
import '../../css/y/y19q9r0gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bmx8l16wx"/><path clip-rule="evenodd" class="qr8ob5b7o"/><path class="y19q9r0gu"/></g>`,
		"fallback": "reicon:sale",
	});
}

export default Component;
