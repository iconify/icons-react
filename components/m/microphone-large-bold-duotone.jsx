import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2cr9mcky.css';
import '../../css/u/u96ejzb5d.css';
import '../../css/z/ztcxm8u1m.css';
import '../../css/g/goumxdp6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x2cr9mcky"/><path class="u96ejzb5d"/><path class="ztcxm8u1m"/><path class="goumxdp6n"/></g>`,
		"fallback": "solar:microphone-large-bold-duotone",
	});
}

export default Component;
