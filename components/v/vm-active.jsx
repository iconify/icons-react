import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/le6z4ilba.css';
import '../../css/b/beay5tb0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="le6z4ilba"/><path class="beay5tb0x"/></g>`,
		"fallback": "codicon:vm-active",
	});
}

export default Component;
