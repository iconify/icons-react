import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c3kbvfgxt.css';
import '../../css/q/qjp9ozb5m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c3kbvfgxt"/><path class="qjp9ozb5m"/></g>`,
		"fallback": "streamline:interface-arrows-turn-up-arrow-bend-curve-change-direction-return-up",
	});
}

export default Component;
