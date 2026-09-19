import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d3x_fubem.css';
import '../../css/z/zri-9ndye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d3x_fubem"/><path class="zri-9ndye"/></g>`,
		"fallback": "hugeicons:sink-01",
	});
}

export default Component;
