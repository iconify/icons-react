import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqjsr3b4n.css';
import '../../css/q/qcsrb4b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fqjsr3b4n"/><path class="qcsrb4b9b"/></g>`,
		"fallback": "solar:scissors-bold-duotone",
	});
}

export default Component;
