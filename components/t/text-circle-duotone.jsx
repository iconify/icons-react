import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5iom388o.css';
import '../../css/b/b0i65_b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p5iom388o"/><path class="b0i65_b8e"/></g>`,
		"fallback": "reicon:text-circle-duotone",
	});
}

export default Component;
