import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yrww9lbbg.css';
import '../../css/a/a1tv8nw3d.css';
import '../../css/i/ihtmtwbcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="yrww9lbbg"/><path class="a1tv8nw3d"/><path class="ihtmtwbcq"/></g>`,
		"fallback": "icon-park:mouse-zodiac",
	});
}

export default Component;
