import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cilbtvbnf.css';
import '../../css/c/cc-3nob7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cilbtvbnf"/><path clip-rule="evenodd" class="cc-3nob7f"/></g>`,
		"fallback": "healthicons:medicine-mortar",
	});
}

export default Component;
