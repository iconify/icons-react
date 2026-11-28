import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b83mzubst.css';
import '../../css/n/nm_g91b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b83mzubst secondary"/><path class="nm_g91b4s primary"/></g>`,
		"fallback": "iconaut:mailbox-duotone",
	});
}

export default Component;
