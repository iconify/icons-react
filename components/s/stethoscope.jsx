import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9i9dccvt.css';
import '../../css/q/q3kvdplzd.css';
import '../../css/i/iwi_9woln.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d9i9dccvt"/><path class="q3kvdplzd"/><path class="iwi_9woln"/></g>`,
		"fallback": "streamline-color:stethoscope",
	});
}

export default Component;
