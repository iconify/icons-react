import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6k8rbbrg.css';
import '../../css/h/h_70hbb5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z6k8rbbrg"/><path clip-rule="evenodd" class="h_70hbb5y"/></g>`,
		"fallback": "healthicons:mental-health-therapy-outline",
	});
}

export default Component;
