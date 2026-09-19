import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/clsq_ub6i.css';
import '../../css/d/dcszxfbnu.css';
import '../../css/p/ptxiofuop.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="clsq_ub6i"/><path class="dcszxfbnu"/><path class="ptxiofuop"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-with-crown",
	});
}

export default Component;
