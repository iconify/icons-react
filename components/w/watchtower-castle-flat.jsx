import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isr46-c5r.css';
import '../../css/s/sjbj8ub5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="isr46-c5r"/><path class="sjbj8ub5k"/></g>`,
		"fallback": "streamline-flex-color:watchtower-castle-flat",
	});
}

export default Component;
