import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crp3fwj3c.css';
import '../../css/r/rppdcvb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="crp3fwj3c"/><path class="rppdcvb9h"/></g>`,
		"fallback": "griddy-icons:sausages-alt",
	});
}

export default Component;
