import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rljf75d-n.css';
import '../../css/q/qpbo7bcqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rljf75d-n"/><path class="qpbo7bcqv"/></g>`,
		"fallback": "healthicons:nutrition",
	});
}

export default Component;
