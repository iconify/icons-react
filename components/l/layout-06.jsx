import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dbw90fvbo.css';
import '../../css/u/u95j_5bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dbw90fvbo"/><path class="u95j_5bbs"/></g>`,
		"fallback": "hugeicons:layout-06",
	});
}

export default Component;
