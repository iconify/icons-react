import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ov-zx-emz.css';
import '../../css/n/njpbhttbi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ov-zx-emz"/><path class="njpbhttbi"/></g>`,
		"fallback": "glyphs:skull",
	});
}

export default Component;
