import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mb5i3q0th.css';
import '../../css/u/uztmj3dza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mb5i3q0th"/><path class="uztmj3dza"/></g>`,
		"fallback": "hugeicons:stumbleupon",
	});
}

export default Component;
