import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z79x1cb5h.css';
import '../../css/a/at64npuob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z79x1cb5h"/><path class="at64npuob"/></g>`,
		"fallback": "healthicons:ribbon",
	});
}

export default Component;
