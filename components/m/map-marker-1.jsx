import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k2livwv7c.css';
import '../../css/z/znp3cbc_g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k2livwv7c"/><path class="znp3cbc_g"/></g>`,
		"fallback": "glyphs:map-marker-1",
	});
}

export default Component;
