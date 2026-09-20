import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/o0l0yrncv.css';
import '../../css/y/yhu770tis.css';
import '../../css/y/ye7qo4bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="o0l0yrncv"/><path class="yhu770tis"/></g><path class="ye7qo4bza"/></g>`,
		"fallback": "solar:posts-carousel-vertical-bold-duotone",
	});
}

export default Component;
