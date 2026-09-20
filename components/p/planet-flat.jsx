import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4y6wobhy.css';
import '../../css/h/h1w7s0hcn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4y6wobhy"/><path clip-rule="evenodd" class="h1w7s0hcn"/></g>`,
		"fallback": "streamline-color:planet-flat",
	});
}

export default Component;
