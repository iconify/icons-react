import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vr4lv1jdc.css';
import '../../css/x/x84ojyn9h.css';
import '../../css/p/px67vtbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vr4lv1jdc"/><path class="x84ojyn9h"/><path class="px67vtbky"/></g>`,
		"fallback": "hugeicons:vote",
	});
}

export default Component;
