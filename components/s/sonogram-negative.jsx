import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lc7wpp7xj.css';
import '../../css/i/ifffufbqi.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsSonogramNegative0)" class="cuyn6tgcc"><path class="lc7wpp7xj"/><path clip-rule="evenodd" class="ifffufbqi"/></g><defs><clipPath id="healthiconsSonogramNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:sonogram-negative",
	});
}

export default Component;
