import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cums48bhj.css';
import '../../css/q/qjh5qom2y.css';
import '../../css/i/ixx5fvb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cums48bhj"/><path clip-rule="evenodd" class="qjh5qom2y"/><path class="ixx5fvb6h"/></g>`,
		"fallback": "nrk:rectangle-landscape-to-portrait-expressive",
	});
}

export default Component;
