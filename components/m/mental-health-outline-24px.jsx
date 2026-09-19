import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3s9tzbyb.css';
import '../../css/q/qyzioi81n.css';
import '../../css/r/rl3wxjb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c3s9tzbyb"/><path class="qyzioi81n"/><path clip-rule="evenodd" class="rl3wxjb1p"/></g>`,
		"fallback": "healthicons:mental-health-outline-24px",
	});
}

export default Component;
