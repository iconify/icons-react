import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hqcxrbhxw.css';
import '../../css/t/ttsjhbbkm.css';
import '../../css/n/nk_6hob_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hqcxrbhxw"/><circle class="ttsjhbbkm"/><path class="nk_6hob_l"/></g>`,
		"fallback": "icon-park:people-top-card",
	});
}

export default Component;
