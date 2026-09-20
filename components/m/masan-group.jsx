import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hw2_d4bhh.css';
import '../../css/g/ggf5rsbim.css';
import '../../css/q/qj671zbhd.css';
import '../../css/e/ez8eymb-h.css';
import '../../css/m/m8xyetqia.css';

const viewBox = {"width":1512,"height":1511};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hw2_d4bhh"/><path class="ggf5rsbim"/><path class="qj671zbhd"/><path class="ez8eymb-h"/><path class="m8xyetqia"/></g>`,
		"fallback": "thesvg:masan-group",
	});
}

export default Component;
