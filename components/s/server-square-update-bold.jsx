import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ooat3rb3h.css';
import '../../css/e/e6tssrb4q.css';
import '../../css/d/dd--r8bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ooat3rb3h"/><path class="e6tssrb4q"/><path class="dd--r8bsq"/></g>`,
		"fallback": "solar:server-square-update-bold",
	});
}

export default Component;
