import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mcgb9sbeb.css';
import '../../css/b/bg_7oi96m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mcgb9sbeb"/><path class="bg_7oi96m"/></g>`,
		"fallback": "icon-park:rotation-vertical",
	});
}

export default Component;
