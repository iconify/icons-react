import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z71d5xf2t.css';
import '../../css/r/r3uqjxbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary z71d5xf2t"/><path class="primary r3uqjxbtl"/></g>`,
		"fallback": "iconaut:trees-duotone",
	});
}

export default Component;
