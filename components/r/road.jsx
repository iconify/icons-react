import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vc8g37bqq.css';
import '../../css/l/lok261uvc.css';
import '../../css/u/u_-f0dsdg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vc8g37bqq"/><path class="lok261uvc"/><path class="u_-f0dsdg"/></g>`,
		"fallback": "glyphs:road",
	});
}

export default Component;
