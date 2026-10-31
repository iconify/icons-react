import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y3xe8_bhf.css';
import '../../css/t/t8hct9bwm.css';
import '../../css/f/fmnr5fuae.css';
import '../../css/s/s9fsbwb2g.css';
import '../../css/g/guq0tfsoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y3xe8_bhf"/><path class="t8hct9bwm wm-shadow"/><path class="fmnr5fuae"/><path class="s9fsbwb2g"/><path class="guq0tfsoz"/></g>`,
		"fallback": "withicons-brutal:train",
	});
}

export default Component;
