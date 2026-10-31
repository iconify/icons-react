import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qm6ot8btb.css';
import '../../css/s/s6k6-acrz.css';
import '../../css/u/u6jhewgbx.css';
import '../../css/r/rvwtt-o0p.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qm6ot8btb wm-shadow"/><path class="s6k6-acrz wm-shadow"/><path class="u6jhewgbx"/><path class="rvwtt-o0p"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:timer-off",
	});
}

export default Component;
