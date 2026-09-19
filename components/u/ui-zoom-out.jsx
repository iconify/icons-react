import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyk4fh25a.css';
import '../../css/q/qp6-zqb_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cyk4fh25a"/><path clip-rule="evenodd" class="qp6-zqb_y"/></g>`,
		"fallback": "healthicons:ui-zoom-out",
	});
}

export default Component;
