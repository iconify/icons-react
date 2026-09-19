import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jj3fupxrx.css';
import '../../css/h/htvqqbcwq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jj3fupxrx"/><path class="htvqqbcwq"/></g>`,
		"fallback": "glyphs:paint-brush",
	});
}

export default Component;
