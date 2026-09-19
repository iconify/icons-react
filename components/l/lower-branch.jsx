import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_-2nnb_l.css';
import '../../css/a/awp_-7bqo.css';
import '../../css/u/usb05nn8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_-2nnb_l"/><circle transform="matrix(0 1 1 0 24 9)" class="awp_-7bqo"/><path class="usb05nn8b"/></g>`,
		"fallback": "icon-park-outline:lower-branch",
	});
}

export default Component;
