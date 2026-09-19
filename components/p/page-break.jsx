import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m737vcc5o.css';
import '../../css/b/b5mgphr1h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m737vcc5o"/><path class="b5mgphr1h"/></g>`,
		"fallback": "glyphs:page-break",
	});
}

export default Component;
