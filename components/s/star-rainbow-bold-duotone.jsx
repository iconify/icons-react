import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-d4sdbbd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zbymvmznn.css';
import '../../css/h/hngxwmbsq.css';
import '../../css/s/sqj-8c32a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n-d4sdbbd"/><g class="mc2zb0bvp"><path class="zbymvmznn"/><path class="hngxwmbsq"/><path class="sqj-8c32a"/></g></g>`,
		"fallback": "solar:star-rainbow-bold-duotone",
	});
}

export default Component;
