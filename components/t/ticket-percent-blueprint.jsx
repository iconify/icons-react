import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/njvgg9mnp.css';
import '../../css/r/rhnsbwb-m.css';
import '../../css/n/nwncmym7l.css';
import '../../css/s/sq9ejvb2i.css';
import '../../css/w/wfkhky_vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="njvgg9mnp wm-deco"/><path class="rhnsbwb-m wm-deco"/><path class="nwncmym7l wm-k"/><path class="sq9ejvb2i wm-a"/><path class="wfkhky_vc wm-k"/></g>`,
		"fallback": "withicons:ticket-percent-blueprint",
	});
}

export default Component;
