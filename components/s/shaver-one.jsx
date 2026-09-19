import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/ow6_-xxas.css';
import '../../css/w/w76ww1b8j.css';
import '../../css/t/tbf9bplkf.css';
import '../../css/f/ft6udiq_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ow6_-xxas"/><path class="w76ww1b8j"/><path class="tbf9bplkf"/><circle class="ft6udiq_a"/></g>`,
		"fallback": "icon-park:shaver-one",
	});
}

export default Component;
