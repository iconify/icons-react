import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi95aobid.css';
import '../../css/e/e7nx_xnas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pi95aobid"/><path class="e7nx_xnas"/></g>`,
		"fallback": "streamline-plump-color:megaphone-refresh-flat",
	});
}

export default Component;
