import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/waavsinzr.css';
import '../../css/j/jyo_x8rvu.css';
import '../../css/r/rx28kj1dq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="waavsinzr"/><path class="jyo_x8rvu"/><path class="rx28kj1dq"/></g>`,
		"fallback": "streamline-flex:invisible-1",
	});
}

export default Component;
