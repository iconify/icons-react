import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zntbuyb6q.css';
import '../../css/c/cexkt5-kt.css';
import '../../css/d/de7w1bc6s.css';
import '../../css/q/qe-5uc0sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zntbuyb6q"/><path class="cexkt5-kt"/><path class="de7w1bc6s"/><path class="qe-5uc0sl"/></g>`,
		"fallback": "solar:streets-navigation-bold-duotone",
	});
}

export default Component;
