import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cxqptr0ul.css';
import '../../css/z/z-xgzi-hj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cxqptr0ul"/><path class="z-xgzi-hj"/></g>`,
		"fallback": "streamline-flex:projector",
	});
}

export default Component;
