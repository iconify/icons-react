import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2nke7cer.css';
import '../../css/f/fn2kqsgce.css';
import '../../css/l/lvm39pbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2nke7cer"/><path class="fn2kqsgce"/><path class="lvm39pbpu"/></g>`,
		"fallback": "andrsrxn:search-sparkle",
	});
}

export default Component;
