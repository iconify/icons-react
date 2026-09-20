import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu7ifwblh.css';
import '../../css/z/zkefbjbhq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zu7ifwblh"/><path clip-rule="evenodd" class="zkefbjbhq"/></g>`,
		"fallback": "streamline-color:move-left-flat",
	});
}

export default Component;
