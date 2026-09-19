import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grhjlkbkz.css';
import '../../css/o/osc1dpxcc.css';
import '../../css/n/n77v4qugm.css';
import '../../css/p/ph9y_ccqv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="grhjlkbkz"/><path class="osc1dpxcc"/><path clip-rule="evenodd" class="n77v4qugm"/><path class="ph9y_ccqv"/></g>`,
		"fallback": "fluent-emoji-flat:right-facing-fist-medium",
	});
}

export default Component;
