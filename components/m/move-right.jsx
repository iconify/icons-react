import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gxuy4172b.css';
import '../../css/l/l9tx6kbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="gxuy4172b"/><path class="l9tx6kbmy"/></g>`,
		"fallback": "hugeicons:move-right",
	});
}

export default Component;
