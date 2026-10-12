import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqk_3vtin.css';
import '../../css/x/x03iax-2f.css';
import '../../css/d/dyn1kjb2c.css';
import '../../css/u/uhfote78q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="pqk_3vtin"/><circle class="x03iax-2f"/><circle class="dyn1kjb2c"/><path class="uhfote78q"/></g>`,
		"fallback": "andrsrxn:ship-wheel",
	});
}

export default Component;
