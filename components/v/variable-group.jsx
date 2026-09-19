import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyu89abgp.css';
import '../../css/x/xifm1i_um.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cyu89abgp"/><path clip-rule="evenodd" class="xifm1i_um"/></g>`,
		"fallback": "codicon:variable-group",
	});
}

export default Component;
