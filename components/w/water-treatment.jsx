import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shy8ozb9z.css';
import '../../css/w/w9pyzggoa.css';
import '../../css/z/zzwk1tb0c.css';
import '../../css/o/ou996nbqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="shy8ozb9z"/><path clip-rule="evenodd" class="w9pyzggoa"/><path clip-rule="evenodd" class="zzwk1tb0c"/><path clip-rule="evenodd" class="ou996nbqg"/></g>`,
		"fallback": "healthicons:water-treatment",
	});
}

export default Component;
