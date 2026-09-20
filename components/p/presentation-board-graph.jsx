import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/edoeo393m.css';
import '../../css/d/dmj85zb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="edoeo393m"/><path class="dmj85zb6h"/></g>`,
		"fallback": "streamline-ultimate:presentation-board-graph",
	});
}

export default Component;
