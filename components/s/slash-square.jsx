import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzxxazbhm.css';
import '../../css/b/bvvfqobxr.css';
import '../../css/x/x04hhgb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 21.06 2.8)" class="uzxxazbhm"/><rect transform="rotate(90 21.06 2.8)" class="bvvfqobxr"/><path class="x04hhgb1s"/></g>`,
		"fallback": "andrsrxn:slash-square",
	});
}

export default Component;
