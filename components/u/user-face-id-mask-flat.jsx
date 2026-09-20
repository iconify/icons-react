import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wxv5r4xen.css';
import '../../css/w/w37ocnjsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wxv5r4xen"/><path class="w37ocnjsv"/></g>`,
		"fallback": "streamline-plump-color:user-face-id-mask-flat",
	});
}

export default Component;
