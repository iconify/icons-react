import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fxdgxwbqi.css';
import '../../css/e/e0ao_zgiq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fxdgxwbqi"/><path class="e0ao_zgiq"/></g>`,
		"fallback": "streamline-flex:user-feedback-heart",
	});
}

export default Component;
