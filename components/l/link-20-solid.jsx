import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mbv0ajbmg.css';
import '../../css/t/t1m2s-bqm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mbv0ajbmg"/><path class="t1m2s-bqm"/></g>`,
		"fallback": "heroicons:link-20-solid",
	});
}

export default Component;
