import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ro7w1abop.css';
import '../../css/m/my46o57az.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ro7w1abop"/><path class="my46o57az"/></g>`,
		"fallback": "streamline-flex:one-finger-tap",
	});
}

export default Component;
