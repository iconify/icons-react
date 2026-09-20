import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dvxynklud.css';
import '../../css/i/iw03oibhy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dvxynklud"/><path class="iw03oibhy"/></g>`,
		"fallback": "streamline-flex:school",
	});
}

export default Component;
