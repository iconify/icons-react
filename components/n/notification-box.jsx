import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9bqwabsj.css';
import '../../css/m/m82es9ban.css';
import '../../css/a/amrxilbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9bqwabsj"/><path class="m82es9ban"/><circle class="amrxilbgy"/></g>`,
		"fallback": "andrsrxn:notification-box",
	});
}

export default Component;
