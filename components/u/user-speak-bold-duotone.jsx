import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vrzl4fc8i.css';
import '../../css/o/oj_agab9t.css';
import '../../css/v/vgla4kbzr.css';
import '../../css/m/mm91f5bdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vrzl4fc8i"/><path class="oj_agab9t"/><path class="vgla4kbzr"/><path class="mm91f5bdn"/></g>`,
		"fallback": "solar:user-speak-bold-duotone",
	});
}

export default Component;
