import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgpmj5glp.css';
import '../../css/c/c1pmiebpv.css';
import '../../css/u/ux2n7ervq.css';
import '../../css/j/jlbwv3bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lgpmj5glp"/><circle class="c1pmiebpv"/><path class="ux2n7ervq"/><path class="jlbwv3bdp"/></g>`,
		"fallback": "solar:key-minimalistic-2-line-duotone",
	});
}

export default Component;
