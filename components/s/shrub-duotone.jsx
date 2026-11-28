import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgo1szb3a.css';
import '../../css/e/eay0moova.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tgo1szb3a"/><path class="eay0moova primary"/></g>`,
		"fallback": "iconaut:shrub-duotone",
	});
}

export default Component;
