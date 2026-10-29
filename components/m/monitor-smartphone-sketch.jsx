import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hg6i1ab2w.css';
import '../../css/d/d3kxx1b4n.css';
import '../../css/t/t36yflbru.css';
import '../../css/d/dkml2cbdk.css';
import '../../css/n/nv7sulbkq.css';
import '../../css/a/a_85qab1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hg6i1ab2w wm-s"/><path class="d3kxx1b4n wm-k"/><path class="t36yflbru wm-k"/><path class="dkml2cbdk wm-a"/><path class="nv7sulbkq wm-s"/><path class="a_85qab1n wm-s"/></g>`,
		"fallback": "withicons:monitor-smartphone-sketch",
	});
}

export default Component;
