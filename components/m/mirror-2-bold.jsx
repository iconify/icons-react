import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8e2n1ftg.css';
import '../../css/k/k99tih_zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8e2n1ftg"/><path class="k99tih_zi"/></g>`,
		"fallback": "solar:mirror-2-bold",
	});
}

export default Component;
