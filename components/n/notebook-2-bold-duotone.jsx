import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9lgglbqn.css';
import '../../css/g/gijtgjb1f.css';
import '../../css/m/mk1y7bbkx.css';
import '../../css/b/bum4ne1un.css';
import '../../css/p/pg-83zbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h9lgglbqn"/><path class="gijtgjb1f"/><path class="mk1y7bbkx"/><path class="bum4ne1un"/><path class="pg-83zbus"/></g>`,
		"fallback": "solar:notebook-2-bold-duotone",
	});
}

export default Component;
