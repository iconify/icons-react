import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8urrnb-x.css';
import '../../css/c/cn5erfbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary x8urrnb-x"/><path class="cn5erfbju primary"/></g>`,
		"fallback": "iconaut:pin-off-duotone",
	});
}

export default Component;
