import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/is5hgsb-y.css';
import '../../css/x/x8svt-b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="is5hgsb-y"/><path class="x8svt-b_n"/></g>`,
		"fallback": "streamline-sharp-color:pie-chart-flat",
	});
}

export default Component;
