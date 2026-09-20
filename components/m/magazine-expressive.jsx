import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ej3pttliz.css';
import '../../css/l/lxv1bqelb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ej3pttliz"/><path clip-rule="evenodd" class="lxv1bqelb"/></g>`,
		"fallback": "nrk:magazine-expressive",
	});
}

export default Component;
