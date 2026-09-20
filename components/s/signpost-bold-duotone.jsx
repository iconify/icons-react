import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/of684nb-q.css';
import '../../css/o/ojsa_8byv.css';
import '../../css/x/x828zuwsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="of684nb-q"/><path class="ojsa_8byv"/><path class="x828zuwsj"/></g>`,
		"fallback": "solar:signpost-bold-duotone",
	});
}

export default Component;
