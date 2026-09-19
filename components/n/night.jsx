import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pxzdee9nu.css';
import '../../css/k/kew0_32yu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pxzdee9nu"/><path class="kew0_32yu"/></g>`,
		"fallback": "glyphs:night",
	});
}

export default Component;
