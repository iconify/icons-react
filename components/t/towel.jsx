import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xowzj3b3e.css';
import '../../css/e/e7f4_rb6n.css';
import '../../css/t/toplsgbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xowzj3b3e"/><path class="e7f4_rb6n"/><path class="toplsgbro"/></g>`,
		"fallback": "andrsrxn:towel",
	});
}

export default Component;
