import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/es9e9mblq.css';
import '../../css/z/zylhabc-w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="es9e9mblq"/><path class="zylhabc-w"/></g>`,
		"fallback": "glyphs:save-1",
	});
}

export default Component;
