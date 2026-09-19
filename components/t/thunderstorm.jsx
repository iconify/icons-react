import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w5etd2brv.css';
import '../../css/u/u2jir3buv.css';
import '../../css/g/gr9gw9bzh.css';
import '../../css/o/ookflcb1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="w5etd2brv"/><path class="u2jir3buv"/><path class="gr9gw9bzh"/><path class="ookflcb1t"/></g>`,
		"fallback": "icon-park:thunderstorm",
	});
}

export default Component;
