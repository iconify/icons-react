import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b833-17wf.css';
import '../../css/s/sotwtbbyo.css';
import '../../css/u/uo1nj3_uy.css';
import '../../css/c/co2kc3hst.css';
import '../../css/q/qv2nxab1k.css';
import '../../css/f/f6_slcb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b833-17wf wm-shadow"/><path class="sotwtbbyo wm-shadow"/><path class="uo1nj3_uy"/><path class="co2kc3hst"/><path class="qv2nxab1k"/><path class="f6_slcb0r"/></g>`,
		"fallback": "withicons-brutal:life-buoy",
	});
}

export default Component;
