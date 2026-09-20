import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/owgi7qbuj.css';
import '../../css/d/dlz7qvb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="owgi7qbuj"/><path class="dlz7qvb1w"/></g>`,
		"fallback": "lets-icons:package",
	});
}

export default Component;
