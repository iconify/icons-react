import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n6n7-ij3e.css';
import '../../css/r/r_vfe3bhg.css';
import '../../css/w/wky8mmmcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n6n7-ij3e"/><path class="r_vfe3bhg"/><path clip-rule="evenodd" class="wky8mmmcc"/></g>`,
		"fallback": "healthicons:sleepy-outline",
	});
}

export default Component;
