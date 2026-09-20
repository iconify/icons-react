import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v57pwdwow.css';
import '../../css/t/t6-1xfgnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="cuyn6tgcc"><path class="v57pwdwow"/><path class="t6-1xfgnz"/></g>`,
		"fallback": "nrk:show",
	});
}

export default Component;
