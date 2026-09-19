import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uip3a__3o.css';
import '../../css/o/om213_p6b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uip3a__3o"/><path class="om213_p6b"/></g>`,
		"fallback": "glyphs:note-clipboard",
	});
}

export default Component;
