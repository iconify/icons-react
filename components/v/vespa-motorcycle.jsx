import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-44blbvn.css';
import '../../css/e/evuc5vbmd.css';
import '../../css/n/n_ea_d4_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c-44blbvn"/><path clip-rule="evenodd" class="evuc5vbmd"/><path class="n_ea_d4_w"/></g>`,
		"fallback": "healthicons:vespa-motorcycle",
	});
}

export default Component;
