import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry9ol6lsh.css';
import '../../css/o/okcsfevjn.css';
import '../../css/w/wntb9b47b.css';
import '../../css/l/ld9cusbiy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ry9ol6lsh"><circle class="okcsfevjn"/><circle class="wntb9b47b"/><circle class="ld9cusbiy"/></g>`,
		"fallback": "material-icon-theme:varnish",
	});
}

export default Component;
