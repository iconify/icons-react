import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qu8hkac0f.css';
import '../../css/y/ysv981b8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(180 8.25 8.25)" class="qu8hkac0f"/><path class="ysv981b8a"/></g>`,
		"fallback": "streamline:interface-align-front-design-front-layer-layers-pile-stack",
	});
}

export default Component;
