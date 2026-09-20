import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hxjbmrxjk.css';
import '../../css/n/nlew3ubop.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hxjbmrxjk"/><path class="nlew3ubop"/></g>`,
		"fallback": "streamline:markdown-document-programming",
	});
}

export default Component;
