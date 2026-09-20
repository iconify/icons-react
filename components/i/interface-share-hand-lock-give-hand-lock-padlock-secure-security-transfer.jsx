import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nw7urdh7w.css';
import '../../css/w/wwipzbb8j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="nw7urdh7w"/><path class="wwipzbb8j"/></g>`,
		"fallback": "streamline:interface-share-hand-lock-give-hand-lock-padlock-secure-security-transfer",
	});
}

export default Component;
