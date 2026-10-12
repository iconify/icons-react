import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yh4u_ebqb.css';
import '../../css/z/zfk710zuz.css';
import '../../css/w/w2suxlfee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yh4u_ebqb"/><path class="zfk710zuz"/><path class="w2suxlfee"/></g>`,
		"fallback": "andrsrxn:save",
	});
}

export default Component;
