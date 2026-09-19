import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v33jx1b4e.css';
import '../../css/w/w4okx46dt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v33jx1b4e"/><path class="w4okx46dt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sunglasses",
	});
}

export default Component;
