import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g23rcvbys.css';
import '../../css/c/cb5q1t0wa.css';
import '../../css/k/ki937_vam.css';
import '../../css/l/legq5bc_c.css';
import '../../css/e/e25_yeuhs.css';
import '../../css/q/qbegytbhw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g23rcvbys"/><path class="cb5q1t0wa"/><g class="ki937_vam"><path class="legq5bc_c"/><circle class="e25_yeuhs"/><circle class="qbegytbhw"/></g>`,
		"fallback": "flat-color-icons:serial-tasks",
	});
}

export default Component;
