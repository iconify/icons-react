import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugma73nhr.css';
import '../../css/x/x5fqx1bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugma73nhr"/><path class="x5fqx1bps"/></g>`,
		"fallback": "lets-icons:ring-fill",
	});
}

export default Component;
