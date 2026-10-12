import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btvf5cc8x.css';
import '../../css/x/xe11pgb_q.css';
import '../../css/a/amrxilbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="btvf5cc8x"/><path class="xe11pgb_q"/><circle transform="rotate(90 18.14 5.83)" class="amrxilbgy"/></g>`,
		"fallback": "andrsrxn:notification-box",
	});
}

export default Component;
