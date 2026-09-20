import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xxgpzthix.css';
import '../../css/q/qdu2ikb6x.css';
import '../../css/v/vpdfj1bpy.css';
import '../../css/l/l1drn8msz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xxgpzthix"/><path class="qdu2ikb6x"/><path class="vpdfj1bpy"/><path class="l1drn8msz"/></g>`,
		"fallback": "solar:skirt-bold",
	});
}

export default Component;
