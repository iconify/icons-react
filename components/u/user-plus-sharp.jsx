import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gaxtyhajp.css';
import '../../css/e/eoz2-lbpy.css';
import '../../css/h/h4n3fdcuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gaxtyhajp"/><path class="eoz2-lbpy"/><path class="h4n3fdcuj"/></g>`,
		"fallback": "pixelarticons:user-plus-sharp",
	});
}

export default Component;
