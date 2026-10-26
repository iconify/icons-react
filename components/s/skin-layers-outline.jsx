import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_p0abc2u.css';
import '../../css/e/e0cq7z_ut.css';
import '../../css/o/oigydacdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h_p0abc2u"/><path clip-rule="evenodd" class="e0cq7z_ut"/><path class="oigydacdg"/></g>`,
		"fallback": "healthicons:skin-layers-outline",
	});
}

export default Component;
