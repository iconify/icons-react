import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i2d57tb6e.css';
import '../../css/i/il-3wuczg.css';
import '../../css/i/iydgav8kp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i2d57tb6e"/><path class="il-3wuczg"/><path class="iydgav8kp"/></g>`,
		"fallback": "streamline-flex:portrait-lock",
	});
}

export default Component;
