import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sx--pgn-w.css';
import '../../css/s/saazrjbxr.css';
import '../../css/c/ck0bcwbmq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sx--pgn-w"/><path class="saazrjbxr"/><path class="ck0bcwbmq"/></g>`,
		"fallback": "streamline:telegram",
	});
}

export default Component;
