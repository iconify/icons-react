import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h1rurhing.css';
import '../../css/s/sg27uob7a.css';
import '../../css/r/r4pbc_b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h1rurhing"/><path class="sg27uob7a"/><path class="r4pbc_b_z"/></g>`,
		"fallback": "solar:money-roll-bold",
	});
}

export default Component;
