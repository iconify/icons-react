import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iuv2f0bhk.css';
import '../../css/h/hks9l4goj.css';
import '../../css/p/p3odo28qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iuv2f0bhk"/><path class="hks9l4goj"/><path class="p3odo28qp"/></g>`,
		"fallback": "andrsrxn:mail-heart",
	});
}

export default Component;
