import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/n2u8ozbbq.css';
import '../../css/y/y-qb6bbqh.css';
import '../../css/m/mybdgyglo.css';
import '../../css/t/t1x3gbbjf.css';
import '../../css/u/uohyxirab.css';
import '../../css/c/csyqkzb7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="n2u8ozbbq"/><path class="y-qb6bbqh"/><circle class="mybdgyglo"/><circle class="t1x3gbbjf"/><rect class="uohyxirab"/><path class="csyqkzb7q"/></g>`,
		"fallback": "icon-park-solid:robot",
	});
}

export default Component;
