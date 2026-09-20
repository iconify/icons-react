import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no2moybga.css';
import '../../css/s/scub3gbrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="no2moybga"/><path class="scub3gbrz"/></g>`,
		"fallback": "streamline-plump-color:open-umbrella-flat",
	});
}

export default Component;
