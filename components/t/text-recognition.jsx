import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/e7cmgmb8y.css';
import '../../css/c/coix3hblc.css';
import '../../css/w/wcox72b7e.css';
import '../../css/h/hgr1_-bpg.css';
import '../../css/i/i8be06b-g.css';
import '../../css/h/had51l7mf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="e7cmgmb8y"/><path class="coix3hblc"/><path class="wcox72b7e"/><path class="hgr1_-bpg"/><path class="i8be06b-g"/><path class="had51l7mf"/></g>`,
		"fallback": "icon-park:text-recognition",
	});
}

export default Component;
