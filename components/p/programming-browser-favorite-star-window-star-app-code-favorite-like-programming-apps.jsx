import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/geymaibsd.css';
import '../../css/v/vhjj40b-p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="geymaibsd"/><path class="vhjj40b-p"/></g>`,
		"fallback": "streamline:programming-browser-favorite-star-window-star-app-code-favorite-like-programming-apps",
	});
}

export default Component;
