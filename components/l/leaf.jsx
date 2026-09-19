import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l0500fbsb.css';
import '../../css/w/wdbl9r6av.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l0500fbsb"/><path class="wdbl9r6av"/></g>`,
		"fallback": "glyphs:leaf",
	});
}

export default Component;
