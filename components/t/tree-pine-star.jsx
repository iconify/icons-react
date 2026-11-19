import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8adrmlth.css';
import '../../css/p/plr9zcb8c.css';
import '../../css/l/ll36sfbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s8adrmlth"/><path class="plr9zcb8c"/><path class="ll36sfbjc"/></g>`,
		"fallback": "andrsrxn:tree-pine-star",
	});
}

export default Component;
