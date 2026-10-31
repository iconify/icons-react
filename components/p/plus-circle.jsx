import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/asqlutt7r.css';
import '../../css/a/ad-x1bbwf.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/m/mylmw0bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="asqlutt7r"/><path class="ad-x1bbwf wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="mylmw0bop wm-a"/></g>`,
		"fallback": "withicons-kawaii:plus-circle",
	});
}

export default Component;
