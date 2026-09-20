import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/n/n6l23acuc.css';
import '../../css/k/ktx3j7bbv.css';
import '../../css/o/ouwn5h0wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="n6l23acuc"/><path class="ktx3j7bbv"/></g><path class="ouwn5h0wn"/></g>`,
		"fallback": "solar:pen-2-bold-duotone",
	});
}

export default Component;
