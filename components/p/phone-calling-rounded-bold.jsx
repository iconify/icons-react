import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz9d3cczj.css';
import '../../css/p/pr0u_cb3y.css';
import '../../css/k/kw0jftbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zz9d3cczj"/><path class="pr0u_cb3y"/><path class="kw0jftbzj"/></g>`,
		"fallback": "solar:phone-calling-rounded-bold",
	});
}

export default Component;
