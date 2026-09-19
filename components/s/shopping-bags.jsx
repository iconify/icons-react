import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e6cpddcyw.css';
import '../../css/r/ry3rr2hev.css';
import '../../css/e/eu2bi-boo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e6cpddcyw"/><path class="ry3rr2hev"/><path class="eu2bi-boo"/></g>`,
		"fallback": "glyphs:shopping-bags",
	});
}

export default Component;
