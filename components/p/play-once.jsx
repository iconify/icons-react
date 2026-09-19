import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kog7s4brn.css';
import '../../css/u/u79z_ybyy.css';
import '../../css/g/g23h7rbyr.css';
import '../../css/s/s-qnrzbfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kog7s4brn"/><path class="u79z_ybyy"/><path class="g23h7rbyr"/><path class="s-qnrzbfz"/></g>`,
		"fallback": "icon-park:play-once",
	});
}

export default Component;
