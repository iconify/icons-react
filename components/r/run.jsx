import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmc15ze4c.css';
import '../../css/h/ht3luwbyh.css';
import '../../css/l/l0pwzoyds.css';
import '../../css/h/hs7iqsb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qmc15ze4c"/><circle class="ht3luwbyh"/><path class="l0pwzoyds"/><path class="hs7iqsb6l"/></g>`,
		"fallback": "andrsrxn:run",
	});
}

export default Component;
