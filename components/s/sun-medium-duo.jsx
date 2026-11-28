import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smr8-nmee.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/twr587btq.css';
import '../../css/m/m2aszhjda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary smr8-nmee"/><g class="dt0cm9dhy primary"><path class="twr587btq"/><path class="m2aszhjda"/></g>`,
		"fallback": "iconaut:sun-medium-duo",
	});
}

export default Component;
