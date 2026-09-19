import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b5pkxmbyt.css';
import '../../css/c/c6kbv1b-p.css';
import '../../css/x/xmu98ub3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b5pkxmbyt"/><path class="c6kbv1b-p"/><path class="xmu98ub3f"/></g>`,
		"fallback": "hugeicons:root-01",
	});
}

export default Component;
