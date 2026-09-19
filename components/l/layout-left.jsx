import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dbw90fvbo.css';
import '../../css/x/x6cun8b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dbw90fvbo"/><path class="x6cun8b7c"/></g>`,
		"fallback": "hugeicons:layout-left",
	});
}

export default Component;
