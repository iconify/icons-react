import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qpscu-yoh.css';
import '../../css/l/lpunhhrxj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qpscu-yoh"/><path class="lpunhhrxj"/></g>`,
		"fallback": "healthicons:sugar-free2x-outline",
	});
}

export default Component;
