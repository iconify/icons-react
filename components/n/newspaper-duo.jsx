import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0q1g-bwc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n3n_5ybem.css';
import '../../css/z/zmhvgl95h.css';
import '../../css/p/pzji73r-b.css';
import '../../css/e/eslrxibqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0q1g-bwc secondary"/><g class="dt0cm9dhy primary"><path class="n3n_5ybem"/><path class="zmhvgl95h"/><path class="pzji73r-b"/><path class="eslrxibqo"/></g>`,
		"fallback": "iconaut:newspaper-duo",
	});
}

export default Component;
