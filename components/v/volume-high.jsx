import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3x592b_i.css';
import '../../css/p/p9b4vhmdm.css';
import '../../css/g/gss-z3gge.css';
import '../../css/q/qws7ylbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b3x592b_i"/><path class="p9b4vhmdm"/><path class="gss-z3gge"/><path class="qws7ylbxp"/></g>`,
		"fallback": "andrsrxn:volume-high",
	});
}

export default Component;
