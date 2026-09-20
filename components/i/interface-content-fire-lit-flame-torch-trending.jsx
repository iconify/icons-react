import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kx1tpcb9t.css';
import '../../css/k/kfip6r0fy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kx1tpcb9t"/><path class="kfip6r0fy"/></g>`,
		"fallback": "streamline:interface-content-fire-lit-flame-torch-trending",
	});
}

export default Component;
