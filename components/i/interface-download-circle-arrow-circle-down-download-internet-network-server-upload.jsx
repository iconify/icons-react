import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ev9pjqbid.css';
import '../../css/x/xcv6q1bnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ev9pjqbid"/><circle class="xcv6q1bnv"/></g>`,
		"fallback": "streamline:interface-download-circle-arrow-circle-down-download-internet-network-server-upload",
	});
}

export default Component;
