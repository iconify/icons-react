import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e3b8tiyzr.css';
import '../../css/b/bvtn84bzo.css';
import '../../css/m/mj08r-blc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e3b8tiyzr"/><path class="bvtn84bzo"/><path class="mj08r-blc"/></g>`,
		"fallback": "pepicons-print:pen",
	});
}

export default Component;
