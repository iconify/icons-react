import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avz07eylb.css';
import '../../css/b/b0bb4sbnm.css';
import '../../css/p/plmlc6b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="avz07eylb"/><path class="b0bb4sbnm"/><path class="plmlc6b1e"/></g>`,
		"fallback": "solar:tennis-bold",
	});
}

export default Component;
