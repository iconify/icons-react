import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dn6lvrbtb.css';
import '../../css/v/viakc3ohv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dn6lvrbtb"/><path class="viakc3ohv"/></g>`,
		"fallback": "glyphs:life-ring",
	});
}

export default Component;
