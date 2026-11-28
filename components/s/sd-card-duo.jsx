import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu_4_bcpi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bplvdbczi.css';
import '../../css/x/xtdwisb7h.css';
import '../../css/r/r3iq3lbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu_4_bcpi secondary"/><g class="dt0cm9dhy primary"><path class="bplvdbczi"/><path class="xtdwisb7h"/><path class="r3iq3lbmh"/></g>`,
		"fallback": "iconaut:sd-card-duo",
	});
}

export default Component;
