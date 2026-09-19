import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yz34f9b6l.css';
import '../../css/p/pyat-2bcw.css';
import '../../css/q/qpw_nlblc.css';
import '../../css/u/ubs9o-b0t.css';
import '../../css/h/h0aiknbwr.css';
import '../../css/z/zwlrnobak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="yz34f9b6l"/><path class="pyat-2bcw"/><path class="qpw_nlblc"/><path class="ubs9o-b0t"/><path class="h0aiknbwr"/><path class="zwlrnobak"/></g>`,
		"fallback": "icon-park:red-envelope",
	});
}

export default Component;
