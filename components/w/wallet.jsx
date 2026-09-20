import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s6809mb7w.css';
import '../../css/z/zdgrtcbmn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s6809mb7w"/><path class="zdgrtcbmn"/></g>`,
		"fallback": "streamline:wallet",
	});
}

export default Component;
