import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6o88t11n.css';
import '../../css/o/olpt3q61e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i6o88t11n"/><path class="olpt3q61e"/></g>`,
		"fallback": "reicon:revote-duotone",
	});
}

export default Component;
