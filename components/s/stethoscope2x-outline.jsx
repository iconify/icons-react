import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyi46smli.css';
import '../../css/p/pua2vac9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zyi46smli"/><path clip-rule="evenodd" class="pua2vac9h"/></g>`,
		"fallback": "healthicons:stethoscope2x-outline",
	});
}

export default Component;
