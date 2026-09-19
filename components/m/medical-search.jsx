import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ghjhw3b6v.css';
import '../../css/o/opopepb0m.css';
import '../../css/l/ljh670flx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ghjhw3b6v"/><path clip-rule="evenodd" class="opopepb0m"/><path clip-rule="evenodd" class="ljh670flx"/></g>`,
		"fallback": "healthicons:medical-search",
	});
}

export default Component;
