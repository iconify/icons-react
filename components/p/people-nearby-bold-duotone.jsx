import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/olqgzbbek.css';
import '../../css/r/rgf_9qbzz.css';
import '../../css/m/mb6i1bdgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="olqgzbbek"/><path class="rgf_9qbzz"/><path class="mb6i1bdgy"/></g>`,
		"fallback": "solar:people-nearby-bold-duotone",
	});
}

export default Component;
