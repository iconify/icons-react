import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/m/mwjqgf-_o.css';
import '../../css/r/rj_m-hnqu.css';
import '../../css/r/rnlg7hb_d.css';
import '../../css/o/oy5-bhbpt.css';
import '../../css/o/ogsn4m47g.css';
import '../../css/o/o43qhebca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="mwjqgf-_o"/><path class="rj_m-hnqu"/><path class="rnlg7hb_d"/><path class="oy5-bhbpt"/><circle class="ogsn4m47g"/><path class="o43qhebca"/></g>`,
		"fallback": "icon-park:radio-one",
	});
}

export default Component;
