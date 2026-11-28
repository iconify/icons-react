import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btvsvz3yg.css';
import '../../css/h/hcyue85ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="btvsvz3yg secondary"/><path class="hcyue85ei primary"/></g>`,
		"fallback": "iconaut:save-duotone",
	});
}

export default Component;
