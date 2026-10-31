import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we3ixppps.css';
import '../../css/u/ughe4gbtv.css';
import '../../css/d/dwfqahi4j.css';
import '../../css/u/uc-8acckt.css';
import '../../css/u/uict-obkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="we3ixppps wm-k"/><path class="ughe4gbtv wm-deco"/><path class="dwfqahi4j wm-k"/><path class="uc-8acckt wm-k"/><path class="uict-obkp wm-shadow"/></g>`,
		"fallback": "withicons-valentine:palm-tree",
	});
}

export default Component;
