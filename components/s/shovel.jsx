import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kt0pdrbqd.css';
import '../../css/o/olqkhccjx.css';
import '../../css/s/sw8xyffxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kt0pdrbqd"/><path class="olqkhccjx"/><rect class="sw8xyffxa"/></g>`,
		"fallback": "icon-park:shovel",
	});
}

export default Component;
