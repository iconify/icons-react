import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7ypd7bqd.css';
import '../../css/q/q9cxadc2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7ypd7bqd"/><path class="q9cxadc2e"/></g>`,
		"fallback": "streamline-freehand-color:safety-sign-electricity",
	});
}

export default Component;
