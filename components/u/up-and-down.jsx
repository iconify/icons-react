import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p6xriabeb.css';
import '../../css/j/jrx2rabbv.css';
import '../../css/h/hnzkvnc0r.css';
import '../../css/v/vgklx2dfs.css';
import '../../css/j/j4zcy2bsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="p6xriabeb"/><path class="jrx2rabbv"/><path class="hnzkvnc0r"/><path class="vgklx2dfs"/><path class="j4zcy2bsn"/></g>`,
		"fallback": "icon-park:up-and-down",
	});
}

export default Component;
