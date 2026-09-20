import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdfol04mj.css';
import '../../css/b/b30bw2w4y.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hdfol04mj"/><path class="b30bw2w4y"/></g>`,
		"fallback": "jam:odnoklassniki",
	});
}

export default Component;
