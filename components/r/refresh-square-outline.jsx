import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/acais7bes.css';
import '../../css/x/xksjiacqg.css';
import '../../css/z/zuqh_gv5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="acais7bes"/><path class="xksjiacqg"/><path clip-rule="evenodd" class="zuqh_gv5l"/></g>`,
		"fallback": "solar:refresh-square-outline",
	});
}

export default Component;
