import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hite52bbr.css';
import '../../css/u/uh5hz412f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hite52bbr"/><path class="uh5hz412f"/></g>`,
		"fallback": "pixelarticons:repeat",
	});
}

export default Component;
