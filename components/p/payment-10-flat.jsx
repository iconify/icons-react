import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1jbcn64x.css';
import '../../css/b/b8m795bow.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w1jbcn64x"/><path clip-rule="evenodd" class="b8m795bow"/></g>`,
		"fallback": "streamline-color:payment-10-flat",
	});
}

export default Component;
