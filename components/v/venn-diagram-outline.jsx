import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jwvhftb8e.css';
import '../../css/e/e4b5jwbkp.css';
import '../../css/c/cx1-3ebcg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="jwvhftb8e"/><path class="e4b5jwbkp"/><path class="cx1-3ebcg"/></g>`,
		"fallback": "teenyicons:venn-diagram-outline",
	});
}

export default Component;
