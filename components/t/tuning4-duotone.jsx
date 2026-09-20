import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yc6y35blk.css';
import '../../css/h/hkze7zbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yc6y35blk"/><path class="hkze7zbgr"/></g>`,
		"fallback": "reicon:tuning4-duotone",
	});
}

export default Component;
