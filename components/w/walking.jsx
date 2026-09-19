import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r6r7o8btm.css';
import '../../css/h/hxs8wwkpq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="r6r7o8btm"/><path class="hxs8wwkpq"/></g>`,
		"fallback": "glyphs:walking",
	});
}

export default Component;
