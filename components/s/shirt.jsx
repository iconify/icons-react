import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt6snqu5h.css';
import '../../css/f/f5ppuo7gp.css';
import '../../css/m/mc3zo1mlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mt6snqu5h"/><path class="f5ppuo7gp"/><path class="mc3zo1mlr"/></g>`,
		"fallback": "pixelarticons:shirt",
	});
}

export default Component;
