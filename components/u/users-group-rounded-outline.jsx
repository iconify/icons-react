import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ex2bgybnk.css';
import '../../css/f/fqav45-4t.css';
import '../../css/a/ac2ne0tob.css';
import '../../css/r/rh5a4_81t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ex2bgybnk"/><path class="fqav45-4t"/><path clip-rule="evenodd" class="ac2ne0tob"/><path class="rh5a4_81t"/></g>`,
		"fallback": "solar:users-group-rounded-outline",
	});
}

export default Component;
