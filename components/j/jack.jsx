import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zf7dxgbbi.css';
import '../../css/j/jd06h_b8s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zf7dxgbbi"/><path class="jd06h_b8s"/></g>`,
		"fallback": "glyphs:jack",
	});
}

export default Component;
