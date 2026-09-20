import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n3iqko05y.css';
import '../../css/p/prqqqvi4o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n3iqko05y"/><path class="prqqqvi4o"/></g>`,
		"fallback": "streamline-color:steps-number-flat",
	});
}

export default Component;
