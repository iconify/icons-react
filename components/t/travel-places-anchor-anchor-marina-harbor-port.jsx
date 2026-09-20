import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ovpnd7bcb.css';
import '../../css/p/pu7xdrmve.css';
import '../../css/k/kn939cpym.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ovpnd7bcb"/><circle class="pu7xdrmve"/><path class="kn939cpym"/></g>`,
		"fallback": "streamline:travel-places-anchor-anchor-marina-harbor-port",
	});
}

export default Component;
