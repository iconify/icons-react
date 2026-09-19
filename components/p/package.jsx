import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axreb9xsd.css';
import '../../css/b/ba8pobbpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="axreb9xsd"/><path clip-rule="evenodd" class="ba8pobbpu"/></g>`,
		"fallback": "codicon:package",
	});
}

export default Component;
