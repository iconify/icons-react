import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edpzlv14f.css';
import '../../css/u/uf4yt_72t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="edpzlv14f secondary"/><path class="primary uf4yt_72t"/></g>`,
		"fallback": "iconaut:lock-off-duotone",
	});
}

export default Component;
