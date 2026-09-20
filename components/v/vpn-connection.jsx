import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w20a5nbxv.css';
import '../../css/a/arlwz6bku.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w20a5nbxv"/><path class="arlwz6bku"/></g>`,
		"fallback": "streamline-flex:vpn-connection",
	});
}

export default Component;
