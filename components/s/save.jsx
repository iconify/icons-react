import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5qhce_5u.css';
import '../../css/h/hiqoehyvg.css';
import '../../css/w/wxit8d4zv.css';
import '../../css/r/rs84ae6xb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h5qhce_5u"/><path clip-rule="evenodd" class="hiqoehyvg"/><path class="wxit8d4zv"/><path class="rs84ae6xb"/></g>`,
		"fallback": "icon-park-outline:save",
	});
}

export default Component;
