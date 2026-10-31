import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qu5lrmbhn.css';
import '../../css/r/rt42k1imi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qu5lrmbhn"/><path class="rt42k1imi"/></g>`,
		"fallback": "coolicons:panel-top-bulk-round",
	});
}

export default Component;
