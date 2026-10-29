import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eh0001y2z.css';
import '../../css/g/gdii7cb0u.css';
import '../../css/v/v-6eycb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eh0001y2z"/><path class="gdii7cb0u wm-shadow"/><path class="v-6eycb-t"/></g>`,
		"fallback": "withicons:parentheses-engrave",
	});
}

export default Component;
