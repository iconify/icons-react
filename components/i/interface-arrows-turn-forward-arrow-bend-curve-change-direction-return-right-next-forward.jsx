import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lqqjipbeb.css';
import '../../css/b/bwk4tibkl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lqqjipbeb"/><path class="bwk4tibkl"/></g>`,
		"fallback": "streamline:interface-arrows-turn-forward-arrow-bend-curve-change-direction-return-right-next-forward",
	});
}

export default Component;
