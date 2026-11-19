import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av0_gjbxd.css';
import '../../css/u/u4h956b0g.css';
import '../../css/q/qe4v6p1zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="av0_gjbxd"/><path class="u4h956b0g"/><path class="qe4v6p1zm"/></g>`,
		"fallback": "andrsrxn:pro",
	});
}

export default Component;
