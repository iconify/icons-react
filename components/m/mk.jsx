import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftu2crbdw.css';
import '../../css/i/ivrs26b2y.css';
import '../../css/u/ul86qe6tg.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ftu2crbdw"/><path class="ivrs26b2y"/><circle class="ul86qe6tg"/></g>`,
		"fallback": "cif:mk",
	});
}

export default Component;
