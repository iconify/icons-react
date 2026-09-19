import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/huq1_xb7l.css';
import '../../css/t/tqg-95b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="huq1_xb7l"/><path class="tqg-95b2m"/></g>`,
		"fallback": "hugeicons:purse",
	});
}

export default Component;
