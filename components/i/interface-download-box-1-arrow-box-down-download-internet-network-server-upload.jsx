import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ezw5v-u5y.css';
import '../../css/z/z395rtvij.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ezw5v-u5y"/><path class="z395rtvij"/></g>`,
		"fallback": "streamline:interface-download-box-1-arrow-box-down-download-internet-network-server-upload",
	});
}

export default Component;
