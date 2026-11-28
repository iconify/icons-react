import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ln5_uybbb.css';
import '../../css/o/ovt860lwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ln5_uybbb"/><path class="ovt860lwc"/></g>`,
		"fallback": "iconaut:washing-machine-solid",
	});
}

export default Component;
