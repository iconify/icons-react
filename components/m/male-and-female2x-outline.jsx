import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g--zyijpb.css';
import '../../css/p/pi14pmkoe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g--zyijpb"/><path class="pi14pmkoe"/></g>`,
		"fallback": "healthicons:male-and-female2x-outline",
	});
}

export default Component;
