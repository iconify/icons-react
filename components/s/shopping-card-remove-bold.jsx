import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/or_1s5gyv.css';
import '../../css/q/ql_kycc5o.css';
import '../../css/s/so4nxo65x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="or_1s5gyv"/><path class="ql_kycc5o"/><path class="so4nxo65x"/></g>`,
		"fallback": "iconamoon:shopping-card-remove-bold",
	});
}

export default Component;
