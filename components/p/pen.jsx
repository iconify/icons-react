import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jqetc8bgy.css';
import '../../css/n/nsg0d4z5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jqetc8bgy"/><path class="nsg0d4z5d"/></g>`,
		"fallback": "gg:pen",
	});
}

export default Component;
