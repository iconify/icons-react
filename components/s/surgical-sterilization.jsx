import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yvbrikbxe.css';
import '../../css/x/x1-cy8bqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yvbrikbxe"/><path class="x1-cy8bqp"/></g>`,
		"fallback": "healthicons:surgical-sterilization",
	});
}

export default Component;
