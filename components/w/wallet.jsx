import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xhwixsw8h.css';
import '../../css/u/url61tbmh.css';
import '../../css/d/dvtk788qt.css';
import '../../css/m/mrag2sbbe.css';
import '../../css/r/ru6_9ubxl.css';
import '../../css/d/dpnjpmbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xhwixsw8h"/><path class="url61tbmh"/><path class="dvtk788qt"/><path class="mrag2sbbe"/><path class="ru6_9ubxl"/><path class="dpnjpmbvo"/></g>`,
		"fallback": "withicons-retro:wallet",
	});
}

export default Component;
