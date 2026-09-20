import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x38wtfdlb.css';
import '../../css/g/g5yg_8b0m.css';
import '../../css/f/f1blexxfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x38wtfdlb"/><path class="g5yg_8b0m"/><path class="f1blexxfa"/></g>`,
		"fallback": "reicon:link6-filled",
	});
}

export default Component;
