import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/r/rwc9qrbec.css';
import '../../css/p/p2_8outck.css';
import '../../css/q/qlmagob2a.css';
import '../../css/p/pc21kri-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="rwc9qrbec"/><path class="p2_8outck"/><path class="qlmagob2a"/><path class="pc21kri-s"/></g>`,
		"fallback": "streamline-kameleon-color:perfume-duo",
	});
}

export default Component;
