import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l34gfkbvr.css';
import '../../css/k/kih02vo1s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l34gfkbvr"/><path class="kih02vo1s"/></g>`,
		"fallback": "glyphs:running",
	});
}

export default Component;
