import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zl3ia7b0c.css';
import '../../css/k/k824fd5yv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zl3ia7b0c"/><path class="k824fd5yv"/></g>`,
		"fallback": "codicon:symbol-variable",
	});
}

export default Component;
