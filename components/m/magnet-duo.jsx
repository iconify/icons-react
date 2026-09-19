import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yf8035-_w.css';
import '../../css/w/wvi862bxn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yf8035-_w"/><path class="wvi862bxn"/></g>`,
		"fallback": "glyphs:magnet-duo",
	});
}

export default Component;
