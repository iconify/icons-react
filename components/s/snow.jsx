import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pj443b1og.css';
import '../../css/r/rqkm5wdvg.css';
import '../../css/r/r98xe4b5t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pj443b1og"/><path class="rqkm5wdvg"/><path class="r98xe4b5t"/></g>`,
		"fallback": "glyphs:snow",
	});
}

export default Component;
