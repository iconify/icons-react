import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/by65o8b7a.css';
import '../../css/j/jtjpt5bdw.css';
import '../../css/o/opm5zyb-n.css';
import '../../css/n/nnf0s5ezz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="by65o8b7a"/><path class="jtjpt5bdw"/><path clip-rule="evenodd" class="opm5zyb-n"/><path clip-rule="evenodd" class="nnf0s5ezz"/></g>`,
		"fallback": "healthicons:rdt-result-neg-invalid-rectangular2x-outline",
	});
}

export default Component;
