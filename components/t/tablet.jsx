import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dz424tbrl.css';
import '../../css/a/a39ak9bra.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dz424tbrl"/><path class="a39ak9bra"/></g>`,
		"fallback": "at-icons:tablet",
	});
}

export default Component;
