import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uyewh5v_x.css';
import '../../css/k/k02vnibys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uyewh5v_x"/><path class="k02vnibys"/></g>`,
		"fallback": "pixelarticons:sticker-sharp",
	});
}

export default Component;
