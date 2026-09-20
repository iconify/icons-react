import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sp5az2tjt.css';
import '../../css/k/k0_w5i52u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sp5az2tjt"/><path class="k0_w5i52u"/></g>`,
		"fallback": "streamline-flex:surveillance-camera",
	});
}

export default Component;
