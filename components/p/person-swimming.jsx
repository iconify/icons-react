import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfmueqmcb.css';
import '../../css/v/v1olb4a7k.css';
import '../../css/u/u4zlcabbx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tfmueqmcb"/><path class="v1olb4a7k"/><path class="u4zlcabbx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-swimming",
	});
}

export default Component;
