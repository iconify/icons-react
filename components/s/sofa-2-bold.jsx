import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6jvy1bcp.css';
import '../../css/a/a12-1fbxe.css';
import '../../css/c/c6sd4lv5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p6jvy1bcp"/><path class="a12-1fbxe"/><path class="c6sd4lv5p"/></g>`,
		"fallback": "solar:sofa-2-bold",
	});
}

export default Component;
