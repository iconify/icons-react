import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dn0b_t0pf.css';
import '../../css/s/skdtjvq9f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dn0b_t0pf"/><path class="skdtjvq9f"/></g>`,
		"fallback": "streamline:travel-wayfinder-fire-exit-sign-arrow-point-direction-signal",
	});
}

export default Component;
