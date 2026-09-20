import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/miacov2kx.css';
import '../../css/o/okd5ylurk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="miacov2kx"/><path clip-rule="evenodd" class="okd5ylurk"/></g>`,
		"fallback": "streamline-plump-color:reset-clock-flat",
	});
}

export default Component;
