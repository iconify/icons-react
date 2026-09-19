import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ce4bvgyxx.css';
import '../../css/a/a6lp9bcmf.css';
import '../../css/z/zwidvqbuw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ce4bvgyxx"/><path class="a6lp9bcmf"/><path class="zwidvqbuw"/></g>`,
		"fallback": "glyphs:signature",
	});
}

export default Component;
