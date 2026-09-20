import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k_qjhvpku.css';
import '../../css/g/gwzcxibji.css';
import '../../css/u/u9qv1uges.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k_qjhvpku"/><path class="gwzcxibji"/><path class="u9qv1uges"/></g>`,
		"fallback": "solar:move-circle-outline",
	});
}

export default Component;
