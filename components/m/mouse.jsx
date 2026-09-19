import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q_486obvc.css';
import '../../css/i/ittn3-bdv.css';
import '../../css/d/duuvhq7gr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="q_486obvc"/><path class="ittn3-bdv"/><path class="duuvhq7gr"/></g>`,
		"fallback": "icon-park:mouse",
	});
}

export default Component;
