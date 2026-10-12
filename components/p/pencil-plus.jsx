import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vsy8hnbry.css';
import '../../css/b/b6943ybxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(135 7.642 8.558)scale(-1 1)" class="vsy8hnbry"/><path class="b6943ybxj"/></g>`,
		"fallback": "andrsrxn:pencil-plus",
	});
}

export default Component;
