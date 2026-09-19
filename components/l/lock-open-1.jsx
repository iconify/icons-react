import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h9mzobbkm.css';
import '../../css/m/mvttor1rw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h9mzobbkm"/><path class="mvttor1rw"/></g>`,
		"fallback": "glyphs:lock-open-1",
	});
}

export default Component;
