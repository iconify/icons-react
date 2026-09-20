import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m_chvgbem.css';
import '../../css/w/wj6opsb2q.css';
import '../../css/i/ismhnnbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m_chvgbem"/><path clip-rule="evenodd" class="wj6opsb2q"/><path class="ismhnnbgi"/></g>`,
		"fallback": "nrk:lock-open",
	});
}

export default Component;
