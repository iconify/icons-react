import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/r/r8bd01bug.css';
import '../../css/h/hsksr011x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="r8bd01bug"/><path class="hsksr011x"/></g>`,
		"fallback": "si:more-horiz-square-line",
	});
}

export default Component;
