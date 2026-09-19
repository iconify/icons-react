import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/of76jl_vj.css';
import '../../css/x/xqhmkp0je.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="of76jl_vj"/><path class="xqhmkp0je"/></g>`,
		"fallback": "healthicons:spraying-outline",
	});
}

export default Component;
