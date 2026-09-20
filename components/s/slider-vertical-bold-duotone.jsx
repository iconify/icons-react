import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwlqebc6h.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jejndwbfp.css';
import '../../css/x/xpb82nibn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kwlqebc6h"/><g class="mc2zb0bvp"><path class="jejndwbfp"/><path class="xpb82nibn"/></g></g>`,
		"fallback": "solar:slider-vertical-bold-duotone",
	});
}

export default Component;
