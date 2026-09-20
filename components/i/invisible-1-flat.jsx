import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cq74x65ul.css';
import '../../css/n/n81vv1bbh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cq74x65ul"/><path class="n81vv1bbh"/></g>`,
		"fallback": "streamline-plump-color:invisible-1-flat",
	});
}

export default Component;
