import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ihrkb6bvf.css';
import '../../css/l/l6orf4bep.css';
import '../../css/q/q6qmp9bzc.css';
import '../../css/w/w6hc32bxs.css';
import '../../css/d/d-bsbqbke.css';
import '../../css/c/crci0tb1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="ihrkb6bvf"/><path class="l6orf4bep"/><path class="q6qmp9bzc"/><path class="w6hc32bxs"/><path class="d-bsbqbke"/><path class="crci0tb1g"/></g>`,
		"fallback": "icon-park:subtract-selection",
	});
}

export default Component;
