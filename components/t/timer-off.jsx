import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ghpiukbhz.css';
import '../../css/b/bqikkxbbg.css';
import '../../css/m/m_mr1rjdk.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ghpiukbhz wm-k"/><path class="bqikkxbbg"/><path class="m_mr1rjdk"/><path class="ohtj0i3jo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:timer-off",
	});
}

export default Component;
