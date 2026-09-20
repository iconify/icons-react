import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/umo1awt0n.css';
import '../../css/u/u5gjpt88l.css';
import '../../css/r/rhcamgb4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="umo1awt0n"/><circle class="u5gjpt88l"/><path class="rhcamgb4e"/></g>`,
		"fallback": "streamline:travel-places-cart-cart-travel-local-buckboard-retro",
	});
}

export default Component;
