import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vsy8hnbry.css';
import '../../css/n/nv6j0ibvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(135 7.642 8.558)scale(-1 1)" class="vsy8hnbry"/><path class="nv6j0ibvv"/></g>`,
		"fallback": "andrsrxn:pencil-off",
	});
}

export default Component;
