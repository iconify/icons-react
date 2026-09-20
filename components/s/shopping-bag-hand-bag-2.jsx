import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ago9gt4_r.css';
import '../../css/v/v8_bmvj1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ago9gt4_r"/><path class="v8_bmvj1p"/></g>`,
		"fallback": "streamline-flex:shopping-bag-hand-bag-2",
	});
}

export default Component;
