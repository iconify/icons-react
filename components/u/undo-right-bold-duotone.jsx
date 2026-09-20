import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qw49u4qjb.css';
import '../../css/v/v6d49rbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qw49u4qjb"/><path class="v6d49rbjg"/></g>`,
		"fallback": "solar:undo-right-bold-duotone",
	});
}

export default Component;
