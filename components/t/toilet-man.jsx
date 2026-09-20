import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w8u-qpbju.css';
import '../../css/m/mwuh5hbhm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w8u-qpbju"/><path class="mwuh5hbhm"/></g>`,
		"fallback": "streamline-flex:toilet-man",
	});
}

export default Component;
