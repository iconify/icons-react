import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybpka6bjy.css';
import '../../css/h/hemult3tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ybpka6bjy"/><path clip-rule="evenodd" class="hemult3tf"/></g>`,
		"fallback": "reicon:key-square3-filled",
	});
}

export default Component;
