import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/ql0u_g6cs.css';
import '../../css/n/n4x99edhm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ql0u_g6cs"/><path class="n4x99edhm"/></g>`,
		"fallback": "streamline-flex:tablet-capsule",
	});
}

export default Component;
