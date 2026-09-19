import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uztmj3dza.css';
import '../../css/q/q75b3778w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uztmj3dza"/><path class="q75b3778w"/></g>`,
		"fallback": "hugeicons:more-or-less-square",
	});
}

export default Component;
