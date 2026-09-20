import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nuwrs2bzu.css';
import '../../css/o/opzysbsir.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nuwrs2bzu"/><path class="opzysbsir"/></g>`,
		"fallback": "streamline-flex:login-1",
	});
}

export default Component;
