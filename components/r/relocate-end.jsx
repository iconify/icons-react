import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ot4895b8t.css';
import '../../css/k/k4pewzbgl.css';
import '../../css/b/b4mghfyxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ot4895b8t"/><path class="k4pewzbgl"/><path class="b4mghfyxj"/></g>`,
		"fallback": "andrsrxn:relocate-end",
	});
}

export default Component;
