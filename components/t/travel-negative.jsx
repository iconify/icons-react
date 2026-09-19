import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kuesjrb9u.css';
import '../../css/l/l9rkj3bjb.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTravelNegative0)" class="cuyn6tgcc"><path class="kuesjrb9u"/><path clip-rule="evenodd" class="l9rkj3bjb"/></g><defs><clipPath id="healthiconsTravelNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:travel-negative",
	});
}

export default Component;
