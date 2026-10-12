import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-puob4kf.css';
import '../../css/b/bc6h-x4ko.css';
import '../../css/j/j_023ccyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-puob4kf"/><circle transform="rotate(90 12 12)" class="bc6h-x4ko"/><path class="j_023ccyn"/></g>`,
		"fallback": "andrsrxn:key-lock",
	});
}

export default Component;
