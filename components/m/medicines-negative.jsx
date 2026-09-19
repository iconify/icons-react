import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwaub5_4j.css';
import '../../css/n/n2e4pyr7u.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMedicinesNegative0)" class="cuyn6tgcc"><path class="uwaub5_4j"/><path clip-rule="evenodd" class="n2e4pyr7u"/></g><defs><clipPath id="healthiconsMedicinesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:medicines-negative",
	});
}

export default Component;
