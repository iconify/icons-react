import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vb7hzgbvr.css';
import '../../css/b/bh6j7jbbj.css';
import '../../css/y/y_974tt6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.27 16.29)" class="vb7hzgbvr"/><rect transform="matrix(0 -1 -1 0 22.27 16.29)" class="bh6j7jbbj"/><path class="y_974tt6h"/></g>`,
		"fallback": "andrsrxn:slides-thumbnails",
	});
}

export default Component;
