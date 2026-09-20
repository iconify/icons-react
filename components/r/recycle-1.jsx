import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3-_b2b6l.css';
import '../../css/s/s4r9mbb8x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m3-_b2b6l"/><path class="s4r9mbb8x"/></g>`,
		"fallback": "streamline-flex-color:recycle-1",
	});
}

export default Component;
