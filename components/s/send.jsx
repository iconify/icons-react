import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bv7za_i5o.css';
import '../../css/z/zr3a3acpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bv7za_i5o"/><path class="zr3a3acpo"/></g>`,
		"fallback": "andrsrxn:send",
	});
}

export default Component;
