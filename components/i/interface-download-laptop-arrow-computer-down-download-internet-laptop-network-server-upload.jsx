import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cjax2fbyr.css';
import '../../css/w/whr-ysbab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cjax2fbyr"/><path class="whr-ysbab"/></g>`,
		"fallback": "streamline:interface-download-laptop-arrow-computer-down-download-internet-laptop-network-server-upload",
	});
}

export default Component;
