import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvh0ujbjp.css';
import '../../css/x/xrpxglbsc.css';
import '../../css/o/oszteyb4a.css';
import '../../css/l/l2onbcc8q.css';
import '../../css/p/prj7bfb_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvh0ujbjp"/><path class="xrpxglbsc"/><path class="oszteyb4a"/><path class="l2onbcc8q"/><path class="prj7bfb_i"/>`,
		"fallback": "flat-color-icons:paid",
	});
}

export default Component;
