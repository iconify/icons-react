import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_z2a8vzi.css';
import '../../css/z/z7j33g1js.css';
import '../../css/l/lu7lnabei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="l_z2a8vzi"/><path class="z7j33g1js"/><path clip-rule="evenodd" class="lu7lnabei"/></g>`,
		"fallback": "solar:rounded-magnifier-bug-bold-duotone",
	});
}

export default Component;
