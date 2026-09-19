import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0epiib1u.css';
import '../../css/i/ior7wzbbb.css';
import '../../css/y/ypcyv060t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u0epiib1u"/><path clip-rule="evenodd" class="ior7wzbbb"/><path class="ypcyv060t"/></g>`,
		"fallback": "healthicons:syphilis-alt2x-outline",
	});
}

export default Component;
