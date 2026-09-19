import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wkrusxbum.css';
import '../../css/h/hx7n4sx5y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wkrusxbum"/><path class="hx7n4sx5y"/></g>`,
		"fallback": "glyphs:search-1-tint",
	});
}

export default Component;
