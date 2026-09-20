import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0p376c9m.css';
import '../../css/c/c8moslb6c.css';
import '../../css/r/r5q5hhblh.css';
import '../../css/t/tby9oe12w.css';
import '../../css/h/hl0p1jcez.css';
import '../../css/m/mofku-k9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0p376c9m"/><path clip-rule="evenodd" class="c8moslb6c"/><path class="r5q5hhblh"/><path class="tby9oe12w"/><path class="hl0p1jcez"/><path class="mofku-k9y"/></g>`,
		"fallback": "solar:reel-2-bold-duotone",
	});
}

export default Component;
