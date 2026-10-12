import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ax2b285us.css';
import '../../css/p/pc5g81b3t.css';
import '../../css/y/ysd9pyvtr.css';
import '../../css/g/g4xa0cbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ax2b285us"/><rect class="pc5g81b3t"/><circle class="ysd9pyvtr"/><path class="g4xa0cbln"/></g>`,
		"fallback": "andrsrxn:speaker",
	});
}

export default Component;
