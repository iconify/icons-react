import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rw6jt6iqj.css';
import '../../css/w/w2shj_btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rw6jt6iqj"/><path class="w2shj_btx"/></g>`,
		"fallback": "solar:playlist-minimalistic-bold",
	});
}

export default Component;
