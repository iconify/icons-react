import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f7sbyu5vo.css';
import '../../css/w/w1i21jr4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f7sbyu5vo"/><path class="w1i21jr4a"/></g>`,
		"fallback": "hugeicons:stroke-inside",
	});
}

export default Component;
