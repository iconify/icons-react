import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ge_-4ubim.css';
import '../../css/n/n2h6fyjip.css';
import '../../css/l/l4j1qrodv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="ge_-4ubim"/><path class="n2h6fyjip"/><path class="l4j1qrodv"/></g>`,
		"fallback": "system-uicons:undo-history",
	});
}

export default Component;
