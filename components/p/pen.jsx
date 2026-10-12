import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tltb36bfd.css';
import '../../css/y/y091xcc5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-45 24.2 -9.65)scale(1 -1)" class="tltb36bfd"/><path class="y091xcc5q"/></g>`,
		"fallback": "andrsrxn:pen",
	});
}

export default Component;
