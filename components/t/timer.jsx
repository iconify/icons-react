import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b5r0r31up.css';
import '../../css/u/uxas3qbtq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b5r0r31up"/><path class="uxas3qbtq"/></g>`,
		"fallback": "glyphs:timer",
	});
}

export default Component;
