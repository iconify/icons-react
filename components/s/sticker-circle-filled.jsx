import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shp0g5b_w.css';
import '../../css/e/eh_c7sarm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="shp0g5b_w"/><path class="eh_c7sarm"/></g>`,
		"fallback": "reicon:sticker-circle-filled",
	});
}

export default Component;
