import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/k/kvjb9cclc.css';
import '../../css/g/gd2be0boy.css';
import '../../css/u/uh9juqbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="kvjb9cclc"/><path class="gd2be0boy"/><path class="uh9juqbza"/></g>`,
		"fallback": "iconaut:outlet",
	});
}

export default Component;
