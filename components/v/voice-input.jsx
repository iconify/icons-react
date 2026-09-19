import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tjhoo-smz.css';
import '../../css/x/x8tj1zoty.css';
import '../../css/u/uy4_sob9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tjhoo-smz"/><path class="x8tj1zoty"/><path class="uy4_sob9g"/></g>`,
		"fallback": "icon-park:voice-input",
	});
}

export default Component;
