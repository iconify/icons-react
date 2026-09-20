import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/au78icbbf.css';
import '../../css/t/tr8v60b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="au78icbbf"/><path class="tr8v60b1u"/></g>`,
		"fallback": "solar:map-point-favourite-broken",
	});
}

export default Component;
