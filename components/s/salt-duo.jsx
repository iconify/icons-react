import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruc4o2mkn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u36ur-bsi.css';
import '../../css/z/zeh6lmwln.css';
import '../../css/g/gw6wo7jcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruc4o2mkn secondary"/><g class="dt0cm9dhy primary"><path class="u36ur-bsi"/><path class="zeh6lmwln"/><path class="gw6wo7jcz"/></g>`,
		"fallback": "iconaut:salt-duo",
	});
}

export default Component;
