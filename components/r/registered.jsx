import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ige_o2b4i.css';
import '../../css/p/p6hwfbxzn.css';
import '../../css/r/rr6cc1z5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ige_o2b4i"/><path class="p6hwfbxzn"/><path class="rr6cc1z5f"/></g>`,
		"fallback": "andrsrxn:registered",
	});
}

export default Component;
