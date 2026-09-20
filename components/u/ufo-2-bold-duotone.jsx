import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi0hccb1b.css';
import '../../css/r/rsmkg3b5t.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/pvz-nrbjs.css';
import '../../css/w/w63jv9baz.css';
import '../../css/l/ll913_fwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zi0hccb1b"/><path class="rsmkg3b5t"/><g class="mc2zb0bvp"><path class="pvz-nrbjs"/><path class="w63jv9baz"/><path class="ll913_fwt"/></g></g>`,
		"fallback": "solar:ufo-2-bold-duotone",
	});
}

export default Component;
