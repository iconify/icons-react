import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6aqcxs5i.css';
import '../../css/r/rql9u2b8f.css';
import '../../css/a/acukp54cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k6aqcxs5i"/><path class="rql9u2b8f"/><path class="acukp54cc"/></g>`,
		"fallback": "solar:text-format-bold-duotone",
	});
}

export default Component;
