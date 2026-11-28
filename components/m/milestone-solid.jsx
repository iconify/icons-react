import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yxgpusbte.css';
import '../../css/i/ifgm6ybag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yxgpusbte"/><path class="ifgm6ybag"/></g>`,
		"fallback": "iconaut:milestone-solid",
	});
}

export default Component;
