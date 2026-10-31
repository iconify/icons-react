import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/ate8bpb7n.css';
import '../../css/h/h4xik3hmv.css';
import '../../css/s/si89vro1n.css';
import '../../css/m/mkmgiffug.css';
import '../../css/b/bcc55lb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ate8bpb7n wm-shadow"/><path class="h4xik3hmv wm-shadow"/><path class="si89vro1n"/><path class="mkmgiffug"/><path class="bcc55lb_f"/></g>`,
		"fallback": "withicons-brutal:trees",
	});
}

export default Component;
