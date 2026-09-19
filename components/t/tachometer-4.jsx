import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/edoidqbii.css';
import '../../css/i/i6ehgi3yl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="edoidqbii"/><path class="i6ehgi3yl"/></g>`,
		"fallback": "glyphs:tachometer-4",
	});
}

export default Component;
