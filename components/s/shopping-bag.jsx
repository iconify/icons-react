import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wnmh7lsob.css';
import '../../css/j/j1h9a-bym.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wnmh7lsob"/><path class="j1h9a-bym"/></g>`,
		"fallback": "glyphs:shopping-bag",
	});
}

export default Component;
