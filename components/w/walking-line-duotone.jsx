import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k80kg2mvy.css';
import '../../css/g/gc0yl5bvu.css';
import '../../css/p/p397vciec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="k80kg2mvy"/><path class="gc0yl5bvu"/><path class="p397vciec"/></g>`,
		"fallback": "solar:walking-line-duotone",
	});
}

export default Component;
