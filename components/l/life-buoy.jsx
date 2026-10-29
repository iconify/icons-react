import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9z3grv4e.css';
import '../../css/p/p2v6v82hv.css';
import '../../css/m/m47bcrbvx.css';
import '../../css/s/s6g5f5bwh.css';
import '../../css/k/kwpurbbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9z3grv4e wm-k"/><path class="p2v6v82hv wm-k"/><path class="m47bcrbvx wm-k"/><path class="s6g5f5bwh wm-shine"/><path class="kwpurbbtu wm-a"/></g>`,
		"fallback": "withicons-anime:life-buoy",
	});
}

export default Component;
