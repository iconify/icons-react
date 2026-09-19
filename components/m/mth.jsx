import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zp0lqgs9o.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/l/lj5llbt1n.css';
import '../../css/o/o60u_h3cb.css';
import '../../css/j/j57wo5w4k.css';
import '../../css/a/ant962v3o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zp0lqgs9o"/><g class="n1mjunbsu"><path class="lj5llbt1n"/><path class="o60u_h3cb"/><path class="j57wo5w4k"/><path class="ant962v3o"/></g></g>`,
		"fallback": "cryptocurrency-color:mth",
	});
}

export default Component;
