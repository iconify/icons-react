import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vp2bgyiul.css';
import '../../css/x/xi28nxida.css';
import '../../css/n/n_0_5x3qc.css';
import '../../css/j/jx8wicb2x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vp2bgyiul"/><path class="xi28nxida"/><path class="n_0_5x3qc"/><path class="jx8wicb2x"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-rowing-boat",
	});
}

export default Component;
