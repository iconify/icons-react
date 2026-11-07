import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g0v39tb0j.css';
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
		"content": `<g class="ipq1z-bjh"><path class="g0v39tb0j"/><path class="u0rz2n6jf"/><path class="x9s79q8hd"/></g>`,
		"fallback": "solar:slider-minimalistic-horizontal-line-duotone",
	});
}

export default Component;
