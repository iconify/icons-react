import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/q/qy7eez15j.css';
import '../../css/r/r8bdnq4dr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="qy7eez15j"/><path class="r8bdnq4dr"/></g>`,
		"fallback": "solar:maximize-square-3-bold-duotone",
	});
}

export default Component;
