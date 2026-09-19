import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lem80_bri.css';
import '../../css/e/e__bb0b3o.css';
import '../../css/g/g4__c4brb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lem80_bri"/><path class="e__bb0b3o"/><path clip-rule="evenodd" class="g4__c4brb"/></g>`,
		"fallback": "healthicons:plantation-worker-alt-outline",
	});
}

export default Component;
