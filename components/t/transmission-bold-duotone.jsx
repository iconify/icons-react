import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odlljn8wv.css';
import '../../css/m/mc3kaab2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="odlljn8wv"/><path clip-rule="evenodd" class="mc3kaab2o"/></g>`,
		"fallback": "solar:transmission-bold-duotone",
	});
}

export default Component;
