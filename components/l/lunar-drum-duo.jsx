import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g261xcqzj.css';
import '../../css/y/y2f-9bb7t.css';
import '../../css/s/sla9ccbde.css';
import '../../css/m/mymtxlbif.css';
import '../../css/q/ql50srbzb.css';
import '../../css/u/uoju-z_9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="g261xcqzj"/><path class="wm-a y2f-9bb7t"/><path class="sla9ccbde wm-s"/><path class="mymtxlbif"/><path class="ql50srbzb"/><path class="uoju-z_9h wm-a"/></g>`,
		"fallback": "withicons:lunar-drum-duo",
	});
}

export default Component;
