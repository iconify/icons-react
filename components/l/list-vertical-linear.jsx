import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvnj3qbjd.css';
import '../../css/k/kh_4bzbdf.css';
import '../../css/o/o2bnwltsv.css';
import '../../css/r/r9gp_ab3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fvnj3qbjd"/><path class="kh_4bzbdf"/><path class="o2bnwltsv"/><path class="r9gp_ab3d"/></g>`,
		"fallback": "solar:list-vertical-linear",
	});
}

export default Component;
