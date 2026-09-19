import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q4k0wbbrb.css';
import '../../css/y/yi5t2jbyt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q4k0wbbrb"/><path class="yi5t2jbyt"/></g>`,
		"fallback": "glyphs:star-of-david",
	});
}

export default Component;
