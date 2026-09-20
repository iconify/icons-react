import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2ektbc6v.css';
import '../../css/m/mv_pbvb2a.css';
import '../../css/q/qgc7ufb8z.css';
import '../../css/y/yqjtrgmuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j2ektbc6v"/><path class="mv_pbvb2a"/><path class="qgc7ufb8z"/><path class="yqjtrgmuv"/></g>`,
		"fallback": "solar:rugby-bold-duotone",
	});
}

export default Component;
