import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/g/gaihcltbf.css';
import '../../css/r/rdnf-acrq.css';
import '../../css/f/fep192yzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="gaihcltbf"/><path class="rdnf-acrq"/><path class="fep192yzw"/></g>`,
		"fallback": "solar:user-cross-rounded-linear",
	});
}

export default Component;
