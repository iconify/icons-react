import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y2awribkf.css';
import '../../css/q/q7zt7673w.css';
import '../../css/r/rjjyjz1xn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y2awribkf"/><path class="q7zt7673w"/><path class="rjjyjz1xn"/></g>`,
		"fallback": "streamline-flex:lock-rotation",
	});
}

export default Component;
