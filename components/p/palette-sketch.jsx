import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t78q7ssck.css';
import '../../css/a/aa1uukbal.css';
import '../../css/q/q0028p0hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t78q7ssck"/><path class="aa1uukbal wm-k"/><path class="q0028p0hj wm-a"/></g>`,
		"fallback": "withicons:palette-sketch",
	});
}

export default Component;
