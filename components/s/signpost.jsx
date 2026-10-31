import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k297yj-2b.css';
import '../../css/q/q--ji-pfw.css';
import '../../css/g/gmua_e35o.css';
import '../../css/s/salvrk-up.css';
import '../../css/n/nd4w_gbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="k297yj-2b wm-shadow"/><path class="q--ji-pfw wm-shadow"/><path class="gmua_e35o"/><path class="salvrk-up"/><path class="nd4w_gbkh"/></g>`,
		"fallback": "withicons-brutal:signpost",
	});
}

export default Component;
