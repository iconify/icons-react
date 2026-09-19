import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rsrdufbut.css';
import '../../css/m/mcjp-yqnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rotate-right-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="rsrdufbut"/><path class="mcjp-yqnp"/></g></g>`,
		"fallback": "cuida:rotate-right-outline",
	});
}

export default Component;
