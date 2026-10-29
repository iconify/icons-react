import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s0rv1cbpy.css';
import '../../css/o/omclqpx8b.css';
import '../../css/t/tmyu-psjc.css';
import '../../css/o/o0pwwr-ng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s0rv1cbpy"/><path class="omclqpx8b wm-k"/><path class="tmyu-psjc wm-k"/><path class="o0pwwr-ng wm-a"/></g>`,
		"fallback": "withicons:shield-user-sketch",
	});
}

export default Component;
