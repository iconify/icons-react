import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/njb-wcnok.css';
import '../../css/e/eazlicbkc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="njb-wcnok"/><path class="eazlicbkc"/></g>`,
		"fallback": "streamline:voice-mail",
	});
}

export default Component;
