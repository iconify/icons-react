import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m_byc2b8w.css';
import '../../css/k/kt65zhk2w.css';
import '../../css/q/qsc59gbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m_byc2b8w"/><path clip-rule="evenodd" class="kt65zhk2w"/><path class="qsc59gbln"/></g>`,
		"fallback": "healthicons:walk-supported-24px",
	});
}

export default Component;
