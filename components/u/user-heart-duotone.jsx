import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8neukw-z.css';
import '../../css/n/nhwshp5mj.css';
import '../../css/l/luthdg-vg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="a8neukw-z"/><path clip-rule="evenodd" class="nhwshp5mj"/><path class="luthdg-vg"/></g>`,
		"fallback": "reicon:user-heart-duotone",
	});
}

export default Component;
