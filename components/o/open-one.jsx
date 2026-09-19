import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xn-prcc5q.css';
import '../../css/c/cbx-d8_6n.css';
import '../../css/u/upitkszhy.css';
import '../../css/e/e9u28uixg.css';
import '../../css/y/yhyyhpbld.css';
import '../../css/g/g5ip63bln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xn-prcc5q"/><path class="cbx-d8_6n"/><path class="upitkszhy"/><path class="e9u28uixg"/><path class="yhyyhpbld"/><circle class="g5ip63bln"/></g>`,
		"fallback": "icon-park:open-one",
	});
}

export default Component;
