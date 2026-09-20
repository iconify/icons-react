import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lm6ew1b5k.css';
import '../../css/w/wvl7x_ubm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lm6ew1b5k"/><path class="wvl7x_ubm"/></g>`,
		"fallback": "streamline-plump-color:play-list-folder-flat",
	});
}

export default Component;
