import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xx6-8zblw.css';
import '../../css/e/ej2gaiyye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xx6-8zblw"/><path class="ej2gaiyye"/></g>`,
		"fallback": "icon-park:swing",
	});
}

export default Component;
