import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n4ezs2els.css';
import '../../css/r/rhl0z7omd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n4ezs2els"/><path class="rhl0z7omd"/></g>`,
		"fallback": "streamline-flex-color:screwdriver-wrench-flat",
	});
}

export default Component;
