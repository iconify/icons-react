import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ovneasjhc.css';
import '../../css/w/wgb6j_bcn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ovneasjhc"/><path class="wgb6j_bcn"/></g>`,
		"fallback": "pepicons:water-drop",
	});
}

export default Component;
