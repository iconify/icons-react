import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lk35y-bvr.css';
import '../../css/c/cn5-l9bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="scope-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="lk35y-bvr"/><path class="cn5-l9bdz"/></g></g>`,
		"fallback": "cuida:scope-outline",
	});
}

export default Component;
