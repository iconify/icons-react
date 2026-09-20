import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2i19ebtr.css';
import '../../css/z/zozzacc7y.css';
import '../../css/m/m7210b4xt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l2i19ebtr"/><path class="zozzacc7y"/><path clip-rule="evenodd" class="m7210b4xt"/></g>`,
		"fallback": "streamline-color:signage-4-flat",
	});
}

export default Component;
