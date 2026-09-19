import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g60fqy0af.css';
import '../../css/c/c5svmcb5r.css';
import '../../css/u/uva8vnb4p.css';
import '../../css/a/a6tuvacnj.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsLetrinaNegative0)" class="cuyn6tgcc"><path class="g60fqy0af"/><path clip-rule="evenodd" class="c5svmcb5r"/><path clip-rule="evenodd" class="uva8vnb4p"/><path clip-rule="evenodd" class="a6tuvacnj"/></g><defs><clipPath id="healthiconsLetrinaNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:letrina-negative",
	});
}

export default Component;
