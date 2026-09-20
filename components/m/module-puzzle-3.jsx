import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lbdagjb_m.css';
import '../../css/f/fjgbpacmh.css';
import '../../css/s/sv-7wrhfp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lbdagjb_m"/><path class="fjgbpacmh"/><path class="sv-7wrhfp"/></g>`,
		"fallback": "streamline:module-puzzle-3",
	});
}

export default Component;
