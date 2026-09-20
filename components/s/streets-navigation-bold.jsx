import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zntbuyb6q.css';
import '../../css/z/za3m3bpbb.css';
import '../../css/z/z3nkyquqv.css';
import '../../css/d/de7w1bc6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zntbuyb6q"/><path class="za3m3bpbb"/><path class="z3nkyquqv"/><path class="de7w1bc6s"/></g>`,
		"fallback": "solar:streets-navigation-bold",
	});
}

export default Component;
