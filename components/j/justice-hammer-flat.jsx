import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txu7yvw_q.css';
import '../../css/u/uzvoekb-y.css';
import '../../css/r/rr32o8s1b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="txu7yvw_q"/><path clip-rule="evenodd" class="uzvoekb-y"/><path class="rr32o8s1b"/></g>`,
		"fallback": "streamline-color:justice-hammer-flat",
	});
}

export default Component;
