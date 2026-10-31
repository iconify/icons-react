import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j3if_hfek.css';
import '../../css/v/vnolbp_wl.css';
import '../../css/p/p5btdgb1w.css';
import '../../css/d/dwthvn6kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="j3if_hfek wm-shadow"/><path class="vnolbp_wl wm-shadow"/><path class="p5btdgb1w"/><path class="dwthvn6kc wm-s"/></g>`,
		"fallback": "withicons-brutal:lotus",
	});
}

export default Component;
