import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8p3_0btu.css';
import '../../css/l/lyhdl9b0f.css';
import '../../css/h/h7v2vtedr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x8p3_0btu"/><path class="lyhdl9b0f"/><path class="h7v2vtedr"/></g>`,
		"fallback": "solar:ladle-bold-duotone",
	});
}

export default Component;
