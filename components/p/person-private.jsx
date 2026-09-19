import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c3sylcoix.css';
import '../../css/j/j_3wd0b1j.css';
import '../../css/h/h2i0_xbnm.css';
import '../../css/m/m___80v3o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c3sylcoix"/><path class="j_3wd0b1j"/><path class="h2i0_xbnm"/><path class="m___80v3o"/></g>`,
		"fallback": "glyphs:person-private",
	});
}

export default Component;
