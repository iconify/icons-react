import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bn_nq9bwn.css';
import '../../css/b/b17_pzm3l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bn_nq9bwn"/><path class="b17_pzm3l"/></g>`,
		"fallback": "streamline-flex:projector-board",
	});
}

export default Component;
