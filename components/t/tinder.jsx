import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm_kwabpi.css';
import '../../css/t/t0w0m9b1w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm_kwabpi"/><path class="t0w0m9b1w"/></g>`,
		"fallback": "streamline-flex-color:tinder",
	});
}

export default Component;
