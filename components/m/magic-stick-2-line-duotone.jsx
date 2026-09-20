import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi75orb7x.css';
import '../../css/r/re1607s_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bi75orb7x"/><path class="re1607s_v"/></g>`,
		"fallback": "solar:magic-stick-2-line-duotone",
	});
}

export default Component;
