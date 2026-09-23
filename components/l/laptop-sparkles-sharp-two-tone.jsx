import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v045ocb8q.css';
import '../../css/c/c6upwkbge.css';
import '../../css/j/j6wq2e0hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v045ocb8q"/><path class="c6upwkbge"/><path class="j6wq2e0hx"/></g>`,
		"fallback": "keyline-icons:laptop-sparkles-sharp-two-tone",
	});
}

export default Component;
