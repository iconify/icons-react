import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmd9tro5y.css';
import '../../css/x/xvka29bcn.css';
import '../../css/y/yxke76biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zmd9tro5y"/><path class="xvka29bcn"/><path clip-rule="evenodd" class="yxke76biy"/></g>`,
		"fallback": "reicon:login3-duotone",
	});
}

export default Component;
