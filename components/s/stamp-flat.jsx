import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6mn1sb9c.css';
import '../../css/y/y-xxp1b4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q6mn1sb9c"/><path class="y-xxp1b4p"/></g>`,
		"fallback": "streamline-plump-color:stamp-flat",
	});
}

export default Component;
