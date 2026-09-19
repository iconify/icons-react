import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6qaytbfd.css';
import '../../css/j/j8oj_fbju.css';
import '../../css/h/h0vhqgbae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k6qaytbfd"/><path clip-rule="evenodd" class="j8oj_fbju"/><path clip-rule="evenodd" class="h0vhqgbae"/></g>`,
		"fallback": "healthicons:rural-post-alt-outline",
	});
}

export default Component;
