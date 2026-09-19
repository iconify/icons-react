import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a23sjbcei.css';
import '../../css/w/wso2tj10m.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsVihNegative0)" class="cuyn6tgcc"><path class="a23sjbcei"/><path clip-rule="evenodd" class="wso2tj10m"/></g><defs><clipPath id="healthiconsVihNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:vih-negative",
	});
}

export default Component;
