import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gy2469b1p.css';
import '../../css/u/u29udfb1o.css';
import '../../css/j/jgx5nz-xl.css';
import '../../css/r/r9gp_ab3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gy2469b1p"/><path class="u29udfb1o"/><path class="jgx5nz-xl"/><path class="r9gp_ab3d"/></g>`,
		"fallback": "solar:list-vertical-line-duotone",
	});
}

export default Component;
