import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/ja7esne3y.css';
import '../../css/u/uz2net2xz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ja7esne3y"/><path class="uz2net2xz"/></g>`,
		"fallback": "glyphs:mouse-1",
	});
}

export default Component;
