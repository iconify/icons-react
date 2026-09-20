import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdrc_0b-w.css';
import '../../css/m/mac2-vu9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sdrc_0b-w"/><path class="mac2-vu9a"/></g>`,
		"fallback": "reicon:lock-keyhole2-duotone",
	});
}

export default Component;
