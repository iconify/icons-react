import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tke-0za-g.css';
import '../../css/u/u0rz2n6jf.css';
import '../../css/x/x9s79q8hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tke-0za-g"/><path class="u0rz2n6jf"/><path class="x9s79q8hd"/></g>`,
		"fallback": "solar:slider-minimalistic-horizontal-line-duotone",
	});
}

export default Component;
