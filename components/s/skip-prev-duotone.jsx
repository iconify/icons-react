import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zu1vz5bom.css';
import '../../css/q/q2m2ex8fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zu1vz5bom"/><path class="q2m2ex8fj"/></g>`,
		"fallback": "reicon:skip-prev-duotone",
	});
}

export default Component;
