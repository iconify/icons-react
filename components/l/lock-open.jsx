import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e4fevxwec.css';
import '../../css/i/iq5e8furx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e4fevxwec"/><path class="iq5e8furx"/></g>`,
		"fallback": "glyphs:lock-open",
	});
}

export default Component;
