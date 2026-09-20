import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smtanqb6k.css';
import '../../css/q/q536y2b8e.css';
import '../../css/a/avshsaceu.css';
import '../../css/y/yzavun0dg.css';
import '../../css/p/p-py5wbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="smtanqb6k"/><path class="q536y2b8e"/><path class="avshsaceu"/><path class="yzavun0dg"/><path class="p-py5wbde"/></g>`,
		"fallback": "solar:leaf-bold-duotone",
	});
}

export default Component;
