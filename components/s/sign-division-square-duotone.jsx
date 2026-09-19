import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stv4069zv.css';
import '../../css/p/ploiaibtp.css';
import '../../css/e/ej0tb8bim.css';
import '../../css/n/np71pzbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stv4069zv"/><path class="ploiaibtp"/><path class="ej0tb8bim"/><path class="np71pzbqd"/></g>`,
		"fallback": "iconamoon:sign-division-square-duotone",
	});
}

export default Component;
