import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qlgj23b6m.css';
import '../../css/f/f3l-gju2l.css';
import '../../css/g/gfehfobrh.css';
import '../../css/z/z8sakdbii.css';
import '../../css/g/gfs13nbjb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qlgj23b6m"/><path class="f3l-gju2l"/><path class="gfehfobrh"/><path class="z8sakdbii"/><path class="gfs13nbjb"/></g>`,
		"fallback": "icon-park:link-left",
	});
}

export default Component;
