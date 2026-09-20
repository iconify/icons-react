import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a47w76b3n.css';
import '../../css/p/phyr9nb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a47w76b3n"/><path class="phyr9nb5h"/></g>`,
		"fallback": "mynaui:volume-high-solid",
	});
}

export default Component;
