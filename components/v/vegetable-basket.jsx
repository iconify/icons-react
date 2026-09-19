import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nfw4zi50g.css';
import '../../css/y/ymg6es-yl.css';
import '../../css/d/dtj_aspgi.css';
import '../../css/q/qigferbpk.css';
import '../../css/d/db2k2tb3h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nfw4zi50g"/><path class="ymg6es-yl"/><path class="dtj_aspgi"/><path class="qigferbpk"/><path class="db2k2tb3h"/></g>`,
		"fallback": "icon-park:vegetable-basket",
	});
}

export default Component;
