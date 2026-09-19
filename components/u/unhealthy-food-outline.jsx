import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vy2uzobhj.css';
import '../../css/n/n5284vbor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vy2uzobhj"/><path class="n5284vbor"/></g>`,
		"fallback": "healthicons:unhealthy-food-outline",
	});
}

export default Component;
