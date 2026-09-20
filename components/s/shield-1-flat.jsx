import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv93_cuva.css';
import '../../css/p/pmwnn8bne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mv93_cuva"/><path class="pmwnn8bne"/></g>`,
		"fallback": "streamline-plump-color:shield-1-flat",
	});
}

export default Component;
