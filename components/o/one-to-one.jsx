import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-yd9kr7m.css';
import '../../css/u/u5x9bv5yk.css';
import '../../css/h/hidh5rs-s.css';
import '../../css/x/x_z5n5bkx.css';
import '../../css/t/tvrx8nbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="b-yd9kr7m"/><circle class="u5x9bv5yk"/><circle class="hidh5rs-s"/><circle class="x_z5n5bkx"/><path class="tvrx8nbcn"/></g>`,
		"fallback": "andrsrxn:one-to-one",
	});
}

export default Component;
