import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eau2_14yj.css';
import '../../css/f/f1ytqkkde.css';
import '../../css/p/p85quqipj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="eau2_14yj"/><path class="f1ytqkkde"/><path class="p85quqipj"/></g>`,
		"fallback": "hugeicons:sidebar-left",
	});
}

export default Component;
