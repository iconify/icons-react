import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mm3aocipf.css';
import '../../css/w/wjzwaub_a.css';
import '../../css/l/l7dao_uee.css';
import '../../css/n/n5z9vnbeb.css';
import '../../css/x/x9x785x5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mm3aocipf wm-k"/><path class="wjzwaub_a wm-a"/><path class="l7dao_uee wm-shadow"/><path class="n5z9vnbeb wm-k"/><path class="wm-a x9x785x5y"/></g>`,
		"fallback": "withicons:shapes-engrave",
	});
}

export default Component;
