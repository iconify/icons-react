import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ldt9ag-dz.css';
import '../../css/t/tw2a8j1nb.css';
import '../../css/l/lmfn8zr3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ldt9ag-dz"/><path class="tw2a8j1nb"/><path class="lmfn8zr3y"/></g>`,
		"fallback": "solar:mouse-line-duotone",
	});
}

export default Component;
