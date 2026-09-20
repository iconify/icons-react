import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pfnbku-4f.css';
import '../../css/t/tvvrs1t7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pfnbku-4f"/><path class="tvvrs1t7g"/></g>`,
		"fallback": "streamline:interface-upload-laptop-arrow-computer-download-internet-laptop-network-server-up-upload",
	});
}

export default Component;
