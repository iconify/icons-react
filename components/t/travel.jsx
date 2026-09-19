import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z08vmqjdw.css';
import '../../css/j/j0681-bpi.css';
import '../../css/e/eue9lwbzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z08vmqjdw"/><path clip-rule="evenodd" class="j0681-bpi"/><path class="eue9lwbzb"/></g>`,
		"fallback": "healthicons:travel",
	});
}

export default Component;
