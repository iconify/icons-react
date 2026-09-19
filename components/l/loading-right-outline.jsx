import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yso__w5go.css';
import '../../css/m/mcjp-yqnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="loading-right-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="yso__w5go"/><path class="mcjp-yqnp"/></g></g>`,
		"fallback": "cuida:loading-right-outline",
	});
}

export default Component;
