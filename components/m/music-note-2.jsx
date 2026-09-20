import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wgqvkxbzh.css';
import '../../css/d/ds9l5ybls.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wgqvkxbzh"/><path class="ds9l5ybls"/></g>`,
		"fallback": "streamline:music-note-2",
	});
}

export default Component;
