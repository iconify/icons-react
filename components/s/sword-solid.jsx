import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gooay8b4p.css';
import '../../css/d/dvmfr9bzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gooay8b4p"/><path class="dvmfr9bzv"/></g>`,
		"fallback": "iconaut:sword-solid",
	});
}

export default Component;
