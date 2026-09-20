import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/ft9mlpj-z.css';
import '../../css/v/vs4d7wb5j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ft9mlpj-z"/><path class="vs4d7wb5j"/></g>`,
		"fallback": "streamline:interface-download-button-1-arrow-button-down-download-internet-network-server-upload",
	});
}

export default Component;
