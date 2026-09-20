import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e7b88jblg.css';
import '../../css/g/glo6mpbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e7b88jblg"/><path class="glo6mpbaq"/></g>`,
		"fallback": "solar:route-bold-duotone",
	});
}

export default Component;
