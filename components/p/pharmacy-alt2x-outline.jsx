import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nonfqabwm.css';
import '../../css/t/tu3zevbrt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nonfqabwm"/><path class="tu3zevbrt"/></g>`,
		"fallback": "healthicons:pharmacy-alt2x-outline",
	});
}

export default Component;
