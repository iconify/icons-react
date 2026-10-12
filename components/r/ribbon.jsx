import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/za7mskb8v.css';
import '../../css/e/e3e74cbjb.css';
import '../../css/y/y_31ppc5l.css';
import '../../css/f/f5bfeacvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="za7mskb8v"/><path class="e3e74cbjb"/><path class="y_31ppc5l"/><path class="f5bfeacvc"/></g>`,
		"fallback": "andrsrxn:ribbon",
	});
}

export default Component;
