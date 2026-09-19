import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y_3zrifku.css';
import '../../css/c/cvynj8xtg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y_3zrifku"/><path class="cvynj8xtg"/></g>`,
		"fallback": "glyphs:sun",
	});
}

export default Component;
