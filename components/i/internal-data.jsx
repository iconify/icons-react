import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xn-prcc5q.css';
import '../../css/c/cmr0379ge.css';
import '../../css/g/gvbdpu-7k.css';
import '../../css/s/silhxrkbx.css';
import '../../css/y/yhyyhpbld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xn-prcc5q"/><path class="cmr0379ge"/><path class="gvbdpu-7k"/><path class="silhxrkbx"/><path class="yhyyhpbld"/></g>`,
		"fallback": "icon-park:internal-data",
	});
}

export default Component;
