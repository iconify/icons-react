import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9a2o1loy.css';
import '../../css/q/qx3jwibhm.css';
import '../../css/n/nc8mu5jra.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/p/p92y09b6u.css';
import '../../css/t/teqmgr2xr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h9a2o1loy"><circle class="qx3jwibhm"/><circle class="nc8mu5jra"/></g><g class="x8poo_bjf"><circle class="p92y09b6u"/><circle class="teqmgr2xr"/></g>`,
		"fallback": "openmoji:radio-button",
	});
}

export default Component;
