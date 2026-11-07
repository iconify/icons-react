import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/g2pb_4bba.css';
import '../../css/f/fwuo4_bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="g2pb_4bba"/><path class="fwuo4_bgn"/></g>`,
		"fallback": "solar:moon-stars-linear",
	});
}

export default Component;
