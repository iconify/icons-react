import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/or2ri1bom.css';
import '../../css/u/ubfreac_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="or2ri1bom"/><path clip-rule="evenodd" class="ubfreac_o"/></g>`,
		"fallback": "healthicons:mobile-clinic-outline",
	});
}

export default Component;
