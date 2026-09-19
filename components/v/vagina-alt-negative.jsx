import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9wfe9bjk.css';
import '../../css/f/fmt8nqaql.css';
import '../../css/t/tngi6xwzf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsVaginaAltNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="s9wfe9bjk"/><path class="fmt8nqaql"/><path class="tngi6xwzf"/></g><defs><clipPath id="healthiconsVaginaAltNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:vagina-alt-negative",
	});
}

export default Component;
