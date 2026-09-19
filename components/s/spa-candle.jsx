import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vvqv5lwim.css';
import '../../css/q/q0szhybqg.css';
import '../../css/a/ae27accfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vvqv5lwim"/><path class="q0szhybqg"/><path class="ae27accfy"/></g>`,
		"fallback": "icon-park:spa-candle",
	});
}

export default Component;
