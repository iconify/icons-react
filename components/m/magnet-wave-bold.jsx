import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1tnh90re.css';
import '../../css/u/umhpbtbew.css';
import '../../css/x/x0h9n2bbe.css';
import '../../css/m/mhu20obsk.css';
import '../../css/q/q6ch55bwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c1tnh90re"/><path class="umhpbtbew"/><path class="x0h9n2bbe"/><path class="mhu20obsk"/><path class="q6ch55bwb"/></g>`,
		"fallback": "solar:magnet-wave-bold",
	});
}

export default Component;
