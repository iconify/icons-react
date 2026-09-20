import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnnfrhlke.css';
import '../../css/c/ccysgic3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnnfrhlke"/><path class="ccysgic3d"/></g>`,
		"fallback": "mynaui:pokeball-solid",
	});
}

export default Component;
