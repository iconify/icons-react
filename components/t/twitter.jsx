import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvl2anbys.css';
import '../../css/y/ydnq8obbc.css';
import '../../css/f/fx212mbag.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="pvl2anbys"/><rect class="ydnq8obbc"/><path class="fx212mbag"/></g>`,
		"fallback": "skill-icons:twitter",
	});
}

export default Component;
