import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m566nq1yt.css';
import '../../css/f/f6yyft70l.css';
import '../../css/c/cc9go-21s.css';
import '../../css/n/nezhdcchh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m566nq1yt"/><path class="f6yyft70l"/><path class="cc9go-21s"/><path class="nezhdcchh"/></g>`,
		"fallback": "solar:satellite-bold-duotone",
	});
}

export default Component;
