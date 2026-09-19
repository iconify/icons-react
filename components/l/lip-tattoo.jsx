import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bksp7_bys.css';
import '../../css/l/lbasq6h_m.css';
import '../../css/n/nn4_--rny.css';
import '../../css/l/lcx7m-3ja.css';
import '../../css/e/e2vr8o77x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="bksp7_bys"/><path class="lbasq6h_m"/><path class="nn4_--rny"/><path class="lcx7m-3ja"/><path class="e2vr8o77x"/></g>`,
		"fallback": "icon-park-outline:lip-tattoo",
	});
}

export default Component;
