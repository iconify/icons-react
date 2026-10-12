import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxmn_bewb.css';
import '../../css/c/cd9j0nbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxmn_bewb"/><path class="cd9j0nbql"/></g>`,
		"fallback": "andrsrxn:keyframe-off",
	});
}

export default Component;
