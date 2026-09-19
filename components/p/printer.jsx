import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nvkf6i-4k.css';
import '../../css/j/jxae9p33p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nvkf6i-4k"/><path class="jxae9p33p"/></g>`,
		"fallback": "glyphs:printer",
	});
}

export default Component;
