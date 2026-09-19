import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wmywwbk2d.css';
import '../../css/b/badn2ib8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="wmywwbk2d"/><path class="badn2ib8x"/></g>`,
		"fallback": "icon-park:slippers",
	});
}

export default Component;
