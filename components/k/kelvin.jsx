import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja8yhwb-i.css';
import '../../css/d/dl2zxihcb.css';
import '../../css/m/m82veobzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ja8yhwb-i"/><circle class="dl2zxihcb"/><path class="m82veobzl"/></g>`,
		"fallback": "andrsrxn:kelvin",
	});
}

export default Component;
