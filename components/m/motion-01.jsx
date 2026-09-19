import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sguyahb_u.css';
import '../../css/y/ys9oqyb_w.css';
import '../../css/i/i8h8tzdlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sguyahb_u"/><path class="ys9oqyb_w"/><path class="i8h8tzdlw"/></g>`,
		"fallback": "hugeicons:motion-01",
	});
}

export default Component;
