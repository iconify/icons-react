import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwye38fmn.css';
import '../../css/e/eu6z8fdae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hwye38fmn"/><path clip-rule="evenodd" class="eu6z8fdae"/></g>`,
		"fallback": "healthicons:loudly-crying",
	});
}

export default Component;
