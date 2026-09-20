import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awuvcu4yv.css';
import '../../css/v/vo_mjh-bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="awuvcu4yv"/><path class="vo_mjh-bd"/></g>`,
		"fallback": "majesticons:usb",
	});
}

export default Component;
