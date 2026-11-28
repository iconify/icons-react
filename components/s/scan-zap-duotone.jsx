import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k49fcbbcd.css';
import '../../css/f/f2t1labii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k49fcbbcd secondary"/><path class="f2t1labii primary"/></g>`,
		"fallback": "iconaut:scan-zap-duotone",
	});
}

export default Component;
