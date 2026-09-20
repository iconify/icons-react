import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xtz38eb7k.css';
import '../../css/v/vexzz8vpb.css';
import '../../css/z/z3-7o0lpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xtz38eb7k"/><path class="vexzz8vpb"/><path class="z3-7o0lpz"/></g>`,
		"fallback": "solar:stethoscope-bold-duotone",
	});
}

export default Component;
