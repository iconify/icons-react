import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg_pxf01i.css';
import '../../css/r/ri-rz2_my.css';
import '../../css/y/yy3626ess.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jg_pxf01i"/><path class="ri-rz2_my"/><path clip-rule="evenodd" class="yy3626ess"/></g>`,
		"fallback": "griddy-icons:panda",
	});
}

export default Component;
